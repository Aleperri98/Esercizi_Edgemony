const q = (selector) => document.querySelector(selector);

const render = (container, items) => {
    const elements = items.map((element) =>
    `<li>
<h3>${element.name}</h3>
<p><strong>Phone:</strong><a href="tel:${element.phone}">${element.phone}</a> </p>
<p><strong>Email:</strong><a href="mailto:${element.email}">${element.email}</a> </p>
</li>`
);
const content = elements.join('');

container.innerHTML = content;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = q("form");
    const inputSearch= document.getElementById("search")
    const list = q("ul");

    render (list, data);

inputSearch.addEventListener('keyup', (event) => {
    const value = inputSearch.value.toLowerCase();

    const results = data.filter((element) => 
      element.name.toLowerCase().search(value) > -1 ||
      element.email.toLowerCase().search(value) > -1
    );

    render(list, results);
  });



  function creatContact (){
  const contact = {
      'name': document.getElementById("contact").value,
      'phone':document.getElementById("number").value,
      'email': document.getElementById("email").value,
  }
  /*const contact= {
    name: event.target.contact.value,
    phone: event.target.number.value,
    email: event.target.number.value
  }; */
  data.push(contact);
  render(list, data);
};

  const addItem = document.querySelector(".addBtn");
  addItem.addEventListener("click", creatContact);
});


const order = document.querySelector(".orderBtn");
order.addEventListener("click", sortAbc);


function sortAbc() {
    const sortalpha = data.sort();
    render(list,sortalpha);
};