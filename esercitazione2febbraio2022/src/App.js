import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodosProvider from './Context/store';
import Notes from './Notes';


function App() {
  return (
    <TodosProvider>
      <Notes />
    </TodosProvider>
  );
}

export default App;
