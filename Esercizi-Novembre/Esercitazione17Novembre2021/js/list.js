import { render, API } from "./utils.js";

const list = (data) => {
    const elements = data
        .map(item => `<li id="list">
        <img src="${item.poster}">
        <a href="#view-${item.id}">${item.title} </a> - ${item.year}
        <a class="edit" href="#edit-${item.id}">✏️</a>

        <button class="delete" id=${item.id}>x</button></li>`)
        .join ('');
    

    const container = document.querySelector('#container');
    render(container, `
    <p>Elenco schede film </p>
    <ul id="ullist"> ${elements}</ul>
    <a href="#add" id="add">Aggiungi una nuova scheda</a>

    `);

    const btns = [...document.querySelectorAll(".delete")];

    const deleteItem= (event) => {
        const id = parseInt(event.target.id);
        const filtered = data.filter((movie) => movie.id !== id);
    
        fetch(`${API}/${id}`, {method: "DELETE"})
        .then((response) => response.json())
        .then(()=>list(filtered));
    }

    const btnClicks = (btn) =>
        btn.addEventListener("click", deleteItem, { once:true});
            
        btns.forEach(btnClicks);
    };

export { list };