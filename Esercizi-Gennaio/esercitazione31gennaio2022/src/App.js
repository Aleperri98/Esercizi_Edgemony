import './App.css';
import {Provider} from 'react-redux';
import { store } from './Store/store';
import { Notes } from './Notes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
}

export default App;
