import React from 'react'
import ReactDom from 'react-dom'

import List from './list'
import Board from './board'
import Card from './card'

export default class ListContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			cards: []
		}
		this.onAddSubmit = this.onAddSubmit.bind(this)
		this.deleteCard = this.deleteCard.bind(this)
	}


	onAddSubmit(text, listName){
		const entry = {
			id: Math.random(),
			text,
			listName 
		}
		this.state.cards.push(entry)

		this.setState({cards: this.state.cards})
	}



	deleteCard(id){

	
		const cards = this.state.cards.filter( card => card.id !== id)

		this.setState({cards})
	}

render() {
	return 	(
	<div>		
		<List onSubmit={this.onAddSubmit} onClick= {this.deleteCard} title={this.props.lists[0]} cards={this.state.cards}/>
		<List onSubmit={this.onAddSubmit} onClick= {this.deleteCard} title={this.props.lists[1]} cards={this.state.cards}/>
		<List onSubmit={this.onAddSubmit} onClick= {this.deleteCard} title={this.props.lists[2]} cards={this.state.cards}/>;
		</div>
		);
	}
}

