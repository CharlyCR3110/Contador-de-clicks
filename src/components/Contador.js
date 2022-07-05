import React from 'react';

const Contador = ({ numeroDeClicks }) => {
	return (
		<div className="contador">
			{ numeroDeClicks }
		</div>
	)
}

export default Contador;