import './App.css';
import logo from './img/freecodecamp-logo.png';


function App() {
  return (
    <div className='App'>
      <div className='logoContenedor'>
        <img
          className='logo' 
          src={ logo }
          alt='logo de la pagina'
          />
      </div>
      <div className='contenedorDelContador'>
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={}
        />
      </div>
    </div>
  );
}

export default App;
