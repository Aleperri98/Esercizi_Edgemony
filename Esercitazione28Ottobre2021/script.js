
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
  });

  

// SOMMA DI DUE NUMERI CON SET TIME OUT IN CONSOLE.LOG
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
let sum = num1 + num2;
setTimeout(() => {
    console.log(sum);
  }, 10000);


//CAMBIO COLORE CERCHIO 
let i = 0;
function changecolor(){
    let color = ['red', 'green', 'yellow', 'purple', 'blue', 'dark', 'white', 'violet', 'grey','pink', 'orange', 'cadetblue','brown'];
    let cerchio = document.getElementById("disc");
    cerchio.style.borderColor= color[i];
    for (i < color.length; i++;)  {
      return (color[i]);
    }}
    const lightcolor = setInterval(changecolor, [1000]);

   document.addEventListener("keypress", (event) => {
     if (event.key==="Enter"){
       clearInterval(lightcolor);
     }});


   
    //SOMMA DI PIU NUMERI CON RISULTATO IN DA DEFINIRE
    // let thenumbers = document.getElementById(".inputNum").value;
    let theNumbers = document.getElementById('idinputnum').getAttribute('value'); 
    let list = theNumbers.split(",");
    const arrValue= [];
    
    let somma = 0;
       for (x of list) {
        arrValue.push(parseInt(x));
      }

    
    for (let y = 0; y<arrValue.length; y++) {
      finalResult = somma + arrValue[y];
      // return finalResult;
    }

  const sommabtn = document.querySelector(".go");
  const h2somma = document.querySelector (".result");

  sommabtn.addEventListener(
    "click", ()  => {
     h2somma.textContent = 'finalResult';
    }
  );

  