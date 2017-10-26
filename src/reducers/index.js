import { combineReducers } from 'redux';
import { SHUFFLE_DECK, DRAW_CARD, SORT_TABLE,DRAW_RANDOM,RESET_DECK } from '../actions/types';
import AbstractCard from '../AbstractCard';
import _ from 'lodash';



const initialDeckState={deck:AbstractCard.createDeck(),table:[]};


export function cardsReducer(state=initialDeckState,action){
	switch(action.type){
		case SHUFFLE_DECK:
			return {...state,deck:_.shuffle([...state.deck])};
		case DRAW_CARD:
			let newState={deck:_.pull([...state.deck],action.payload),table:[...state.table,action.payload]};
			return newState
		case SORT_TABLE:
			return {...state,table:_.sortBy([...state.table],card=>card.value)};
		case DRAW_RANDOM:
			return {deck:_.drop([...state.deck],action.payload),table:state.table.concat(_.take([...state.deck],action.payload))};
		case RESET_DECK:
			return {deck:_.sortBy([...state.table],card=>card.value), table:[]}
		default:

			return state;
	}
	
}

const rootReducer = combineReducers({
  cards: cardsReducer
});

export default rootReducer;
