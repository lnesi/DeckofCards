import { combineReducers } from 'redux';
import { SHUFFLE_DECK, DRAW_CARD, SORT_TABLE,DRAW_RANDOM,RESET_DECK } from '../actions';
import _ from 'lodash';

const cardsDefinitionState=
{
  	cards:{
	  	1:{key:1,name:'2'},
	  	2:{key:2,name:'3'},
	  	3:{key:3,name:'4'},
	  	4:{key:4,name:'5'},
	  	5:{key:5,name:'6'},
	  	6:{key:6,name:'7'},
	  	7:{key:7,name:'8'},
	  	8:{key:8,name:'9'},
	  	9:{key:9,name:'10'},
	  	10:{key:10,name:'jack'},
	  	11:{key:11,name:'queen'},
	  	12:{key:12,name:'king'},
	  	13:{key:13,name:'ace'},
	 },
	 suites:{
	 	1:{key:0,name:'clubs'},
	 	2:{key:14,name:'spades'},
	 	3:{key:28,name:'hearts'},
	 	4:{key:42,name:'diamonds'}
	 }
  };


function createDeck(){
	let deck=[]
	for(let i=1;i<=4;i++){
		for(let j=1; j<14;j++){
			deck.push({
				suite:cardsDefinitionState.suites[i],
				card:cardsDefinitionState.cards[j],
				value:cardsDefinitionState.suites[i].key+cardsDefinitionState.cards[j].key
			});
		}
	}
	return deck;
}
const initialDeckState={deck:createDeck(),table:[]};


function cardsReducer(state=initialDeckState,action){
	console.log(action.type,state,action.payload);
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
  cardsDefinition: (state)=>cardsDefinitionState,
  cards: cardsReducer
});

export default rootReducer;
