import { SHUFFLE_DECK, DRAW_CARD, SORT_TABLE,DRAW_RANDOM,RESET_DECK } from './types';

// Action Creators
export function shuffleDeck(){
	return {type:SHUFFLE_DECK,payload:null}
}

export function drawCard(card){
	return {type:DRAW_CARD,payload:card}
}

export function sortTable(){
	return {type:SORT_TABLE,payload:null}
}

export function drawRandomCard(count){
	return {type:DRAW_RANDOM,payload:count}
}

export function resetDeck(){
	return {type:RESET_DECK,payload:null}
}