var express = require('express');
var app = express();
app.use(express.json());
const db = require('../db');
app.get("/getRatings", async(req,res,next)=>{
    try{
        console.log("fetching the ratings");
        const stmt = db.prepare('SELECT ratings FROM posts');
        const records = stmt.all();
        res.status(200).json(records);
    }
    catch(e){
        res.status(500).json({error:err.message});
        console.err(e);
    }
});

app.put("/addRatings", (req,res,next)=>{
    try
    {
        const stmt = db.prepare('UPDATE posts SET ratings = ? WHERE postID = ?');
        stmt.run(req.query.ratings,req.query.postID);
        res.send('Success, rating was updated');
    }
    catch(e)
    {
        console.err(e);

    }
});