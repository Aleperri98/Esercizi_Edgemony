import { render } from "./utils.js";

const list = (data) => {
    const elements = data
        .map(item => `<div><label><input 
        type="checkbox" ${item.completed ? "checked": ""} id="${item.id}"> ${item.title} </label></div>`)
        .join ('');
    
    const container = document.querySelector('#container');
    render(container, `
    <p>Things to do </p>
    <form> ${elements}</form>
    `);
};

export { list };