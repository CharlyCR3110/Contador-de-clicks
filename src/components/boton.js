import React from 'react';
import '../stylesheets/Boton.css';


const Boton = ({ texto, esBotonDeClick, manejarClick }) => {
  return (
      <button
				className={ esBotonDeClick ? 'botonClick' : 'botonReiniciar' }
				onClick={ manejarClick }>
          { texto }
      </button>
  )
}

export default Boton;