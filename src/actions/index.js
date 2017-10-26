//Types
export const SHUFFLE_DECK	= 'SHUFFLE_DECK';
export const DRAW_CARD		= 'DRAW_CARD';
export const SORT_TABLE 	= 'SORT_HAND';
export const DRAW_RANDOM	= 'DRAW_RANDOM';
export const RESET_DECK		= 'RESET_DECK';

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