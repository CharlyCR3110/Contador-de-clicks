import React from 'react';
import '../stylesheets/Contador.css'

const Contador = ({ numeroDeClicks }) => {
	return (
		<div className="contador">
			{ numeroDeClicks }
		</div>
	)
}

export default Contador;