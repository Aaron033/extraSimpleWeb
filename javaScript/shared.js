var backdrop = document.querySelector('.backdrop');
var modal= document.querySelector('.modal'); 

//we are going to pick a button that is inside the .plan tag
var selectPlanButtons = document.querySelectorAll('.prices button'); 


for(var i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function(){
        modal.style.display= 'block';
        backdrop.style.display='block'; 
        
    });
    
}

backdrop.addEventListener("click", closeModal);
modalNoButton.addEventListener("click", closeModal);

function closeModal(){
    backdrop.style.display ="none"; 
    modal.style.display = "none"; 
}