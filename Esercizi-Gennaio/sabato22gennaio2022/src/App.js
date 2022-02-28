import './App.css';
import { FormInput } from './components/FormInput'
import { useState, useCallback, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const handleChangeName = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const handleChangeDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, [setDescription]);


  return (
    <div className="App">
      <FormInput value={name} onChange={handleChangeName} tag={"name"} />

      <FormInput value={description} onChange={handleChangeDescription} tag={"description"} />

    </div>
  );
}

export default App;
