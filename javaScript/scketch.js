let toggleNavStatus =false; 

let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-div");
    let getSidebarUl = document.querySelector(".nav-div ul");
     let getSidebarLinks = document.querySelectorAll(".nav-div a");
    
    if(toggleNavStatus ===false){
        
        getSidebarUl.style.visibility="visible";
        
        let arrayLength =getSidebarLinks.length;
        for(let i=0; i< arrayLength; i++ ){
            getSidebarLinks[i].style.opacity="1";
            
        }
        toggleNavStatus =true;
    }
    
    
    
    else if (toggleNavStatus ===true ){
        
        
        
        let arrayLength = getSidebarLinks.length;
        for(let i=0; i< arrayLength; i++ ){
            getSidebarLinks[i].style.opacity="0";
            
        }
        getSidebarUl.style.visibility="hidden";
        toggleNavStatus =false;
    }
}