var star = 0;
window.onload = function(){
    let cnode = Object.keys(document.getElementById("starsBlank").children);
   console.log( document.getElementById("starsBlank").children.length);
    console.log(cnode);
   cnode.forEach((x,idx)=>{
    console.log(idx);
        document.getElementById(`star${idx+1}`).onmouseover = function(e){
            // console.log("star"+(idx+1));
            console.log( e.currentTarget.previousElementSibling);

            }
   })
}
  /* document.getElementById("star3").onmouseover = function() {
    //document.getElementById("star1").style.color = "red"
    //document.getElementById("star1").previousElementSibling
    console.log(Object.keys(document.getElementById("starsBlank").children));

        
    
}
document.getElementById("star3").onmouseout = function() {
    //document.getElementById("star1").style.color = "darkkhaki"
}*/

function recfun(obj){
    if(!obj) return
    obj.previousElementSibling.style.color = "red";
     
}