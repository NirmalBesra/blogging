var starcolor = ["rgb(241, 89, 89)","rgb(241, 157, 89)","rgb(241, 226, 89)","rgb(188, 241, 89)","rgb(124, 241, 89)"];
window.onload = function(){
    let cnode = document.querySelectorAll("#starsBlank span");

   cnode.forEach((x,idx)=>{
    let colorVar;
        x.addEventListener("mouseenter",(e)=>{colorVar = starcolor[idx];
            x.style.color = colorVar;
            for(let i=idx;i>=0;i--){
                cnode[i].style.color = colorVar;
            }}); 
        x.addEventListener( "mouseleave" ,(e)=>{
           x.style.color = "darkkhaki"; 
            for(let i=idx;i>=0;i--){
                cnode[i].style.color = "darkkhaki"; 
            }
        });
   })
}
  