import { renderComponent , expect } from '../test_helper';
import Deck from '../../src/components/Deck';
import _ from 'lodash';

describe('DeckComponent',()=>{
	let component;
	beforeEach(()=>{
		component=renderComponent(Deck);
	});

	it('has correct wrapper class: deck',()=>{
		expect(component).to.have.class("deck");
	});

	it('has card holder to render cards',()=>{
		expect(component.find(".card-holder")).to.exist; 
	});

	it('has a button to shuffle cards',()=>{
		expect(component.find(".btn-shuffle")).to.exist;
	});

	it('initialize with 52 cards',()=>{
		expect(component.find(".card-holder").find(".card").length).to.equal(52);
	});
	
	it('has a draw form the top input and button',()=>{
		expect(component.find(".draw-form").find("input[type='number']")).to.exist;
		expect(component.find(".draw-form").find("button")).to.exist;
	});

	it('has the ability to draw a given number of cards from the top (10)',()=>{
		component.find(".draw-form").find("input[type='number']").simulate("change",10);
		component.find(".draw-form").find("button").simulate("click");
		expect(component.find(".card-holder").find(".card").length).to.equal(42);
	});


	it('can draw card by clicking it (remove card from deck)',()=>{
		component.find(".card-holder").find(".card").first().simulate('click');
		expect(component.find(".card-holder").find(".card").length).to.equal(51);
	});

	it('has the ability to shuffle cards',()=>{
		let originalSort=[]
		component.find(".card-holder").find(".card").each(function(c,v){
			originalSort.push(v.getAttribute('data-value'));
		});
		component.find(".btn-shuffle").simulate('click');
		let shuffleSort=[]
		component.find(".card-holder").find(".card").each(function(c,v){
			shuffleSort.push(v.getAttribute('data-value'));
		});
		let same=true;
		originalSort.forEach(function(value,index){
			if(same) same=value==shuffleSort[index]; 
		})
		expect(same).to.equal(false);
		
	});



});