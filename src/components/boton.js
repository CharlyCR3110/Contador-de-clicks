import React from 'react';

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