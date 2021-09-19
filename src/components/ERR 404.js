//import logo from './logo.svg';
import logo from '../imgs/Logo.png';
import '../css/ERR404.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eliab Evora  <code>Working...</code> 
        </p>
        <a
          className="App-link"
          href="https://wa.me/qr/ZV523Y7QNQHCE1"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿Dudas? haz click aqui para contactarnos
        </a>
      </header>
    </div>
  );
}

export default App;
