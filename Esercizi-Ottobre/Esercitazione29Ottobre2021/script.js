//AGGIUNGI UN TITOLO H1 DA PROMPT

const addtext = prompt ("Inserisci la data di oggi");
const newh1 = document.createElement ("h1");
const intestazione = document.querySelector(".header");

arrh1= [];

arrh1.push(addtext);

intestazione.appendChild(newh1);
newh1.className="h1Title";
newh1.textContent = [arrh1];

//AGGIUNGI LISTE ITEM AD UNORDER LIST CON UN BUTTON  DA DEFINIRE

const list = document.querySelector(".list");

const buttonadd = document.querySelector(".addBtn");

const val = document.querySelector("#inputItem"); //PRENDO I VALORI DALL'INPUT BOX


buttonadd.addEventListener("click", () => {
  showList (val);
});


function showList () {
const checkvalue = document.createElement("input"); //CREO ELEMENTO INPUT CHECKBOX
checkvalue.type="checkbox";
checkvalue.id="check";
const labelvalue=document.createElement("label"); //CREO LABEL PER LA CHECKBOX
labelvalue.HTMLfor="check";
labelvalue.textContent = val.value; //ASSOCIO VAL ALLE LABEL DELLE CHECKBOX
val.value="";
list.appendChild(checkvalue); // NE DEFINISCO L'INSERIMENTO DELLA POSIZIONE
checkvalue.appendChild(labelvalue);
 };







