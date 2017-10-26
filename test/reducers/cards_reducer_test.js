import { expect } from '../test_helper';
import {cardsReducer} from '../../src/reducers';
import { SHUFFLE_DECK, DRAW_CARD, SORT_TABLE,DRAW_RANDOM,RESET_DECK } from '../../src/actions/types';
import AbstractCard from '../../src/AbstractCard';

describe("Cards Reducer",()=>{
	it('handles action with uknown type',()=>{
		expect(cardsReducer(undefined,{})).to.be.instanceof(Object);
		expect(cardsReducer(undefined,{}).deck).to.be.instanceof(Array);
		expect(cardsReducer(undefined,{}).table).to.be.instanceof(Array);
	});

	it('handles action of type SHUFFLE_DECK',()=>{
		const action = {type:SHUFFLE_DECK, payload:null};
		const newState=cardsReducer({deck:[1,2,3,4,5]},action);
		expect(newState).to.not.eql([1,2,3,4,5]);
		
	});

	

});