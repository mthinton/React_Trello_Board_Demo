require('babel-polyfill');

import React from 'react';
import List from './list';
import ListContainer from './list-container'


export default class Board extends React.Component {

	render(){

		return (
		<div className="board">
			<div className="boardTitle">{this.props.title}</div>
			<ListContainer lists={["To-Do", "Doing", "Done"]}/>
		</div>
		);
			
	}
}
