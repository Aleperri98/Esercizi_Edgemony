function sendCredentials(username) {
    nameTitle.textContent = ' ' + `${username}`;
}
    
    

 // PROVE FALLITE, CREARE UN NUOVO SPAN DA JAVASCRIPT INSERENDOLO DOPO I 10 CARATTERI DI H1
    // const h1 = document.getElementById('h1Text');
    // const text = h1.childNodes[0];
    // const len = 10;
    // const text1 = text.nodeValue.substr(0, len);
    // const text2 = text.nodeValue.substr(len);
    // h1.removeChild(h1.childNodes[0]);
    // const span = document.createElement('span');
    // span.appendChild(document.createTextNode('${username}'));
    // h1.appendChild(document.createTextNode(text1));
    // h1.appendChild(span);
    // h1.appendChild(document.createTextNode(text2)); 
    
//////////ALTRA PROVA
    // var textnode = document.createTextNode("${username}");
    // document.getElementById("h1Text").innerHTML = '${username}';
// userPage.firstElementChild.textContent.replace='${username}';
    

function saveCredentials(user, pass) {
    window.localStorage.setItem("username", user);
    window.localStorage.setItem("password", pass);
}

function loadCredentials(key){
return window.localStorage.getItem(key);
}

const nameTitle = document.querySelector("#name")
const userPage = document.querySelector(".userPage");
const modalEl = document.querySelector(".modal");

const userInputEl = document.querySelector("#user");
const passInputEl = document.querySelector("#password");
const btnSendEl = document.querySelector("#btnSend");


const user = {
    username: "",
    password: "",
};

sendCredentials(loadCredentials("username"));

btnSendEl.addEventListener("click", (evt) => {
    user.username= userInputEl.value;    
    user.password= passInputEl.value;

    saveCredentials(user.username, user.password);

    const userStorage= window.localStorage.getItem("username");

    sendCredentials(userStorage);
});



