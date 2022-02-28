import { render, API } from "./utils.js";


const add = () => {
    const container = document.querySelector("#container");
    render(container, `<h3>Add a new todo </h3>
    <form id="create">
        <div class="row">
        <label for="title">Titolo:</label>
        <input type="text" id="title" name="title"/>
        </div>
        
        <div class="row">
        <input type="checkbox" id="completed" name="completed"/>
        </div>

        <div class="row">
        <label for="title">Scadenza:</label>
        <input type="date" id="expires" name="expires"/>
        </div>

        <button> Save todo </button>
    </form>
        `
    );

    const form = document.querySelector('#create');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const item = {
            title: event.target.title.value,
            completed: event.target.completed.value,
            expires: parseInt(event.target.expires.value)
        };

        fetch(API, {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(item),
        });
    });
};

export { add };