document.addEventListener("DOMContentLoaded", function() {

    const menu= document.querySelector(".menu");
     const hamburger= document.querySelector(".hamburger");
       hamburger.addEventListener("click",function(){
  if(menu.style.display !== "block"){
    menu.style.display="block"
  }else{
  menu.style.display="none"
  }
       })
     
  
       const navlist=document.querySelectorAll("nav li");
       for (let i = 0; i < navlist.length; i++) {
         navlist[i].addEventListener("click",function(){
           menu.style.display="none"
         })
         
       }
});