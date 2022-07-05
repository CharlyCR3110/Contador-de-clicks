import './App.css';
import Contador from './components/Contador';
import Boton from'./components/Boton.js'
import logo from './img/Counter.png'
import { useState } from 'react';

function App() {

  const [numeroDeClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    console.log('Click');
    setNumClicks(numeroDeClicks + 1);
  }

  const reinicarContador = () => {
    console.log('Reiniciar')
    setNumClicks(0);
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
        <Contador numeroDeClicks={numeroDeClicks} />
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
