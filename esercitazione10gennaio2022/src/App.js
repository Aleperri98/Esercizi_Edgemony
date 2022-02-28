import { useReducer } from 'react';
import './App.css';

const init = {
  name:"",
  surname:"",
  email:"",
  age:"",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update-name":
    return{...state, name: action.payload};
    case "update-surname":
    return{...state, surname: action.payload};
    case "update-email":
    return{...state, email: action.payload};
    case "update-age":
    return{...state, age: action.payload};
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
};


function App() {
  const [state, dispatch] = useReducer(reducer, init);
  
 

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Nome" value={state.name} onChange={(evt) => dispatch({type:"update-name", payload:evt.target.value})} required/>
      <input name="surname" type="text" placeholder="Cognome" value={state.surname} onChange={(evt) => dispatch({type:"update-surname", payload:evt.target.value})} required/>
      <input name="email" type="e-mail" placeholder="E-mail" value={state.email} onChange={(evt) => dispatch({type:"update-email", payload:evt.target.value})} required/>
      <input name="age" type="number" placeholder="Età" value={state.age} onChange={(evt) => dispatch({type:"update-age", payload:evt.target.value})} required/>
      <button> Invia dati</button>
    </form>
  );
}

export default App;
