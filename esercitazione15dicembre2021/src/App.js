import './App.css';
import Input from './components/Input';



// function calc() {
//   const costValue = document.querySelector("#cost").value;
//   const vatValue = document.querySelector("#VAT").value;
//   const result= costValue + (costValue*vatValue/100);

//   }
  

function App() {

  return (
    
    <div className="App">
            <h1>Calculate the price</h1>
            <form>
              <Input valueof="cost" />
              <Input valueof="VAT" />
              {/* <button onClick={calc()}>Go!</button> */}
              {/* <h2>{result}</h2> */}
            </form>
    </div>
    
  );
}






export default App;
