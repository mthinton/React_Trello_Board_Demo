import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

chai.should = chai.should();

import List from '../js/components/list'

describe('List component', function(){
	it('Renders the list with cards', function(){
		const fakeList = {
			title: "The Best List",
			cards : [
				{
					id: 1,
					text: "There once was a person",
					listName: "The Best List"
				}
			]
		}


		const renderer = TestUtils.createRenderer();
		console.log(fakeList.cards[0])
		renderer.render(<List title={fakeList.title} cards={fakeList.cards}/>);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('list');

		const title = result.props.children[0];
		title.type.should.equal('div');
		title.props.children.should.equal(fakeList.title);

		const listIdentifier = result.props.children[1];
		listIdentifier.type.should.equal('div')
			const container = listIdentifier.props.children[0]
				const content = container.props.children[0]
					content.props.card.id.should.equal(fakeList.cards[0].id)
					content.props.card.text.should.equal(fakeList.cards[0].text)
					content.props.card.listName.should.equal(fakeList.cards[0].listName)
	
	})
})