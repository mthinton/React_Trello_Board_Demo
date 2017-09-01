import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function(){
	it('Renders the card Id and text', function(){
		const card = {
		id: 1,
		text : "Hey dude"
	}

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card card={card}/>);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('card');
		result.type.should.equal('div');

		const iD = result.props.children[0];
		iD.should.equal(card.id);

		const text = result.props.children[2];
		text.should.equal(card.text);

		result.props.children.length.should.equal(Object.keys(card).length + 1);

		
	})
})