import { renderComponent , expect } from '../test_helper';
import DrawTable from '../../src/components/DrawTable';
import AbstractCard  from '../../src/AbstractCard';

describe('DrawTable Component',()=>{
	let component;
	let initialState
	beforeEach(()=>{
		
		initialState={cards:{
			deck:AbstractCard.createDeck(), 
			table:[
				new AbstractCard("2","diamonds"),
				new AbstractCard("4","hearts"),
				new AbstractCard("6","spades"),
				new AbstractCard("8","clubs")
			]
		}};
		component=renderComponent(DrawTable,null,initialState);
	});

	it('has correct wrapper class: draw-table',()=>{
		expect(component).to.have.class("draw-table");
	});

	it('has card holder to render cards',()=>{
		expect(component.find(".card-holder")).to.exist; 
	});
	
	it('has a button to shuffle cards',()=>{
		expect(component.find(".btn-sort-cards")).to.exist;
	});

	it('has the correct ammount of cards base on table state (4)',()=>{
		expect(component.find(".card-holder").find(".card").length).to.equal(4);
	});

	it('has the ability to sort cards',()=>{

		
		component.find(".btn-sort-cards").simulate('click');
		let sorted=[]
		component.find(".card-holder").find(".card").each(function(c,v){
			sorted.push(v.getAttribute('data-name'));
		});
		 
		expect(sorted[0]).to.equal("8_of_clubs");
		expect(sorted[1]).to.equal("6_of_spades");
		expect(sorted[2]).to.equal("4_of_hearts");
		expect(sorted[3]).to.equal("2_of_diamonds");
	});
});