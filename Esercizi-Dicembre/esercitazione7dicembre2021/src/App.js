import logo from './photo.png';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Alessandra Perricone</h1>
        <div className="description">
          <h2>Description</h2>
          <p>loremIpsum</p>
        </div>
      </header>
      <main>
        <div className="mainSection">
          <div className="worksExp">
            <h3>Works experiences</h3>
            <p>lorem loremIpsum</p>
          </div>
          <div className="languages">
            <h3>Languages</h3>
            <p> lorem loremIpsum</p>
          </div>
          <div className="hobby">
            <h3>Hobby</h3>
            <p>lorem ipsum</p>
          </div>
        </div>

        <div className="form">
          <h3>Contact Me!</h3>
          <label for="object">Object</label>
          <input type="text" name="object"></input>
          <label for="mextxt">Message</label>
          <textarea name="mexTxt"></textarea>
        </div>
      </main>
    </div>
    <footer>
      <div className="footer">
        <h4>E-mail</h4>
        <p>alessandra.perricone3@gmail.com</p>
      </div>
      </footer>
      </div>
  );
}

export default App;
