import React from 'react';
import ReactDOM from 'react-dom'
import Card from './card';

export default function List (props){
	return (
		<div className="list">
		<div>{props.title}</div>
		<div>
			{props.cards.map((card, index) => {
				if(card.listName === props.title) {
					return (
						<div key={index}>
							<Card  card={card} />
							<button onClick={ () => props.onClick(card.id)}>Delete</button>
						</div>
					)
				}
			})}
		</div>

		<form onSubmit={(event) => {
			event.preventDefault()

			const userInput = event.target.userInput.value
			const listTitle = props.title

			props.onSubmit(userInput, listTitle)

			event.target.userInput.value = ''
		}}>
			<input name="userInput" type="text"></input>
			<button type="submit">Submit</button>
		</form>
		</div>
	);
}
