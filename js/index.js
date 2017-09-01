require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom'
import Board from './components/board'

document.addEventListener('DOMContentLoaded', () => 
		ReactDOM.render(<Board title="Trello Organization List" />, document.getElementById('app'))
	);

