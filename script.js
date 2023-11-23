 let profileMenu=document.getElementById("profileMenu");

 function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
 }
 let sidebaractivity=document.getElementById("sidebar-activity");
 let morelink=document.getElementById("showMorelink");

 function toggleactivity(){
   sidebaractivity.classList.toggle("open-activity");
   if(sidebaractivity.classList.contains("open-activity")){
      morelink.innerHTML="Show less <b>-</b>"
   }
   else{
      morelink.innerHTML="Show more <b>+</b>"

   }
 }
