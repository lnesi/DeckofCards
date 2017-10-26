import { expect } from '../test_helper';
import { SHUFFLE_DECK, DRAW_CARD, SORT_TABLE,DRAW_RANDOM,RESET_DECK } from '../../src/actions/types';
import { shuffleDeck, sortTable , drawCard, drawRandomCard, resetDeck } from '../../src/actions/';
import AbstractCard from '../../src/AbstractCard';

describe('actions',()=>{
	
	describe('shuffleDeck',()=>{
		
		it('has the correct type',()=>{
			const action = shuffleDeck();
			expect(action.type).to.equal(SHUFFLE_DECK);
		});

		it('has the correct payload',()=>{
			const action = shuffleDeck();
			expect(action.payload).to.equal(null);
		});

	});

	describe('sortTable',()=>{
		
		it('has the correct type',()=>{
			const action = sortTable();
			expect(action.type).to.equal(SORT_TABLE);
		});

		it('has the correct payload',()=>{
			const action = sortTable();
			expect(action.payload).to.equal(null);
		});

	});

	describe('drawCard',()=>{
		
		it('has the correct type',()=>{
			const action = drawCard(new AbstractCard('2','hearts'));
			expect(action.type).to.equal(DRAW_CARD);
		});

		it('has the correct payload',()=>{
			const action = drawCard(new AbstractCard('2','hearts'));
			expect(action.payload.card.name).to.equal('2');
		});

	});

	describe('drawRandomCard',()=>{
		
		it('has the correct type',()=>{
			const action = drawRandomCard(1);
			expect(action.type).to.equal(DRAW_RANDOM);
		});

		it('has the correct payload',()=>{
			const action = drawRandomCard(10);
			expect(action.payload).to.equal(10);
		});

	});
	
	describe('shuffleDeck',()=>{
		
		it('has the correct type',()=>{
			const action = resetDeck();
			expect(action.type).to.equal(RESET_DECK);
		});

		it('has the correct payload',()=>{
			const action = resetDeck();
			expect(action.payload).to.equal(null);
		});

	});


});