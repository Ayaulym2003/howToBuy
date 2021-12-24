$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".menu").css("background" , "rgb(39, 34, 33)");
        }
  
        else{
            $(".menu").css("background" , "transparent");  	
        }
    })
  })
  
  var lastScrollTop = 0;
  
  
  window.addEventListener("scroll", function(){ 
     var st = window.pageYOffset || document.documentElement.scrollTop;
     if (st > lastScrollTop){
       
        $(".menu").css("top" , "-100px");
     } else {
      
        $(".menu").css("top" , "0px"); 
     }
     lastScrollTop = st <= 0 ? 0 : st; 
  }, false);
  
  


const slideValue = document.getElementById("slideValue");
const inputSlider = document.getElementById("inputSlider");
inputSlider.oninput = (() =>{
    let value = inputSlider.value;
    value = numberWithSpaces(value);
    slideValue.textContent = value;
    slideValue.style.textContent = value;
   
}); 

const slideValue1 = document.getElementById("slideValue1");
const inputSlider1 = document.getElementById("inputSlider1");
inputSlider1.oninput = (() =>{
    let value = inputSlider1.value;
    value = numberWithSpaces(value);
    slideValue1.textContent = value;
    slideValue1.style.textContent = value;
    
}); 

const slideValue2 = document.getElementById("slideValue2");
const inputSlider2 = document.getElementById("inputSlider2");
inputSlider2.oninput = (() =>{
    let value = inputSlider2.value;
    
    value = numberWithSpaces(value);
    slideValue2.textContent = value;
    slideValue2.style.textContent = value;
    
   
}); 


function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function numberWithoutSpaces(x) {
     alert(x.toString().replace(/\s/g, ''));
    return x.toString().replace(/\s/g, '');
   
}
function round(x) { return Math.round(x*100)/100; } docstore.mik.ua/orelly/webprog/jscript/ch01_08.htm

function computeLoan(){
    
    const inputSlider = document.getElementById("inputSlider");
    const inputSlider1 = document.getElementById("inputSlider1");
    const inputSlider2 = document.getElementById("inputSlider2");
    const interestI = document.getElementById("interest");

    let amount = inputSlider.value;
    let year = inputSlider1.value;
    let initial = inputSlider2.value;
    let month = year*12;
    const button = document.getElementById('modalBtn');
    let interest1 = 4.7/100/12;
    let interest2 = 4.89/100/12;
    let interest3 = 4.99/100/12;
    if(amount<initial){
        let bank1 = document.getElementById('bank1');
        bank1.style.opacity = "0.5";
        let bank2 = document.getElementById('bank2');
        bank2.style.opacity = "0.5";
        let bank3 = document.getElementById('bank3');
        bank3.style.opacity = "0.5";
        button. disabled = true;
        
    }
        else{ button. disabled = false;
        bank1.style.opacity = "1";
        bank2.style.opacity = "1";
        bank3.style.opacity = "1";
    let payment1 = ((amount-initial) * interest1 * (Math.pow(1 + interest1, month)) / (Math.pow(1 + interest1, month) - 1)); 
    payment1 = round(payment1);
    let payment2 = ((amount-initial) * interest2 * (Math.pow(1 + interest2, month)) / (Math.pow(1 + interest2, month) - 1)); 
    payment2 = round(payment2);
    let payment3 = ((amount-initial) * interest3 * (Math.pow(1 + interest3, month)) / (Math.pow(1 + interest3, month) - 1)); 
    payment3 = round(payment3);
    
    payment1 = payment1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
    payment2 = payment2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
    payment3 = payment3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
   
    document.getElementById('payment1').innerHTML = payment1;
    document.getElementById('payment2').innerHTML = payment2;
    document.getElementById('payment3').innerHTML = payment3;
        }
}



