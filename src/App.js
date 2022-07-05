import './App.css';
import logo from './img/freecodecamp-logo.png';


function App() {
  return (
    <div className='App'>
      <div className='logoContenedor'>
        <img
          className='logo' 
          src={logo}
          alt='logo de la pagina'
          />
      </div>
      <div className='contenedorDelContador'>
        
      </div>
    </div>
  );
}

export default App;
