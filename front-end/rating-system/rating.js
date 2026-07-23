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
        x.addEventListener("click",async (e)=>{
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; chartset=UTF-8"
                },
                body: JSON.stringify({
                    rating: ``,
                    postId: 0
                })
            }
            if(true){
                try{
                    const response = await fetch("https:\\localhost:8080\rating",requestOptions);
                    if(!response.ok) throw new Error(`Status: ${response.status}`);

                    const result = await response.json();
                    

                }
                catch(err){

                }
               
            }
        });
        x.addEventListener( "mouseleave" ,(e)=>{
           x.style.color = "darkkhaki"; 
            for(let i=idx;i>=0;i--){
                cnode[i].style.color = "darkkhaki"; 
            }
        });
   })
}
  