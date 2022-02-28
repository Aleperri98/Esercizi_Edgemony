

 const q = (selector) => document.querySelector(selector);
        
const modal = q(".modal");
const closeBtn = q("#btn-close");
const resetBtn = q("#btn-reset");
const paragraph = q(".paragraph");
const modalAd =q(".modalAdvice");




//IMPLEMENTO FUNZIONE CLOSE AL BTN
function closeModal() {
        document.body.removeChild(modal);
      }



//IMPLEMENTO FUNZIONE AL RESET BTN
function resetDocument() {
        paragraph.remove();
        modal.remove();
        setTimeout(function(){
                modalAd.style.display = 'flex';
        }, 5000); {once:true}
};


function displayAlert() {
        setTimeout(function(){
                modalAd.style.display = 'flex';
        }, 5000); {once:true}
};

//LA MODALE APPARE 10 SECONDI DOPO AVER APERTO IL SITO
window.addEventListener("DOMContentLoaded", () =>{
        modal.style.display = "none";
        modalAd.style.display = "none";
        setTimeout(function() {
        modal.style.display = 'flex';
        }, 10000); {once:true}
     });


closeBtn.addEventListener("click", closeModal, {once:true});

resetBtn.addEventListener ("click", (event) => {
        // resetDocument();
        displayAlert();      
});

setInterval(function(element, ) {
        const monkeyName = document.createElement("h2")
                monkeyName.textContent = `${element.name} "${element.aka}" ${element.surname}`
        }, 5000);
