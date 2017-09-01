import React from 'react';

export default function Card (props){
	return (
		<div className="card">
 			{props.card.id} - {props.card.text}		
 		</div>
	);
}
