const cart = [];
function itemlist (){
    let item = prompt ("Inserisci la lista della spesa");
    if (cart .includes(item) == true){
        alert ("è già nel tuo carrello!")
    }
    else {
        alert ("articolo aggiunto")
        cart.push(item);
    }
console.log(cart)
}