import './App.css';
import Boton from'./components/Boton.js'
import logo from './img/Counter.png'


function App() {
  const manejarClick = () => {
    console.log('Click');
    
  }

  const reinicarContador = () => {
    console.log('Reiniciar')
  }

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
          esBotonDeClick={ true }
          manejarClick={ manejarClick }
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={ false }
          manejarClick={ reinicarContador }
        />
      </div>
    </div>
  );
}

export default App;
