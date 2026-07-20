var starcolor = ["rgb(241, 89, 89)","rgb(241, 157, 89)","rgb(241, 226, 89)","rgb(188, 241, 89)","rgb(124, 241, 89)"];
window.onload = function(){
    let cnode = Object.keys(document.getElementById("starsBlank").children);
   console.log( document.getElementById("starsBlank").children.length);
    console.log(cnode);
   cnode.forEach((x,idx)=>{
    console.log(idx);
    
        document.getElementById(`star${idx+1}`).onmouseover = function(e){
            let colorVar = starcolor[idx];
            document.getElementById(`star${idx+1}`).style.color = colorVar;
            for(let i=idx;i>0;i--){
                document.getElementById(`star${i}`).style.color = colorVar;
            }
            }
        document.getElementById(`star${idx+1}`).onmouseout = function(e){
           document.getElementById(`star${idx+1}`).style.color = "darkkhaki"; 
            for(let i=idx;i>0;i--){
                document.getElementById(`star${i}`).style.color = "darkkhaki";
            }
        }
   })
}
  