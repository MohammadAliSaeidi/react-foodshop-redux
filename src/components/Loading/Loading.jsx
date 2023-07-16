import React from 'react';
import './Loading.css'

function Loading({size}) {
	return (
		<div style={{width:size, height: size}} className="lds-dual-ring"></div>
	);
}

export default Loading;