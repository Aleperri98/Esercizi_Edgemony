// DARK MODE
const darkMode = document.querySelector(".btnOff");
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// LIGHT MODE
const lightMode = document.querySelector(".btnOn");
lightMode.addEventListener("click", () => {
    const foot= document.querySelector(".hobby")
    foot.classList.toggle("light");
});

// SELECT IN BORDER HARDSKILLS
const select = document.querySelector(".hardSkills",);
select.addEventListener("mouseover", (event) => {
    document.getElementById("eco",).className = "selection"
    document.getElementById("info").className = "selection"
  });

// EVIDENZIA IL TESTO QUANDO IL MOUSE CI PASSA SOPRA E VA VIA, TIMEOUT E POI TORNA ROSSO
  let evid = document.getElementById("list");
  evid.addEventListener("mouseleave", function(event) {
    event.target.style.color = "white";
    setTimeout(function() {
        event.target.style.color = "red";
      }, 3000);  
  });
  
// MOSTRA IN CONSOLE IL NUMERO DI <LI> UTILIZZATI
  document.addEventListener("click",() => {
      const itemlist = document.getElementsByTagName("li").length;
      console.log(itemlist);
  });
  
 

  //MOSTRA IMMAGINE AL CLICK DI UN BUTTON (TOGGLE DA RIVEDERE)
  const image = document.querySelector(".btnImg");
  image.addEventListener("click", () => {
      document.getElementById("skyline").style.display="inline-block";
      document.body.classList.toggle();
  });
