const q = (selector) => document.querySelector(selector);
const popBtn = document.getElementById("removeBtn");

document.addEventListener("DOMContentLoaded", () => {
    const list = q ("ul");

    render(list, data);
});


const render = (container, items) => {
    const elements = items.map((element) =>{
    if(element.completed){
        return `<li>
        <input type="checkbox" id="check" checked> <label for="check">${element.title}</label></li>`
    }
        else {
            return `<li>
            <input type="checkbox" id="check"> <label for="check">${element.title}</label></li>`
        }});

    const content = elements.join('');
    
    popBtn.addEventListener("click",() => {
        elements.pop('');
        const content = elements.join('');
        container.innerHTML = content;
    });

    container.innerHTML = content;
    };

    
    
    
    
    
 


    