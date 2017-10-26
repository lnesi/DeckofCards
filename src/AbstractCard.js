import _ from 'lodash';

export default class AbstractCard{
	static def={
	  	cards:{
		  	1:{key:1,name:'2'},
		  	2:{key:5,name:'3'},
		  	3:{key:9,name:'4'},
		  	4:{key:13,name:'5'},
		  	5:{key:17,name:'6'},
		  	6:{key:21,name:'7'},
		  	7:{key:25,name:'8'},
		  	8:{key:29,name:'9'},
		  	9:{key:33,name:'10'},
		  	10:{key:37,name:'jack'},
		  	11:{key:41,name:'queen'},
		  	12:{key:45,name:'king'},
		  	13:{key:49,name:'ace'},
		 },
		 suits:{
		 	1:{key:1,name:'clubs'},
		 	2:{key:2,name:'spades'},
		 	3:{key:3,name:'hearts'},
		 	4:{key:4,name:'diamonds'}
		 }
	}

	constructor(cardName,suitName){
		let suitKey=_.findKey(AbstractCard.def.suits,(suit)=>{return suit.name==suitName});
		this.suit=AbstractCard.def.suits[suitKey];
		let cardKey=_.findKey(AbstractCard.def.cards,(card)=>{return card.name==cardName});
		this.card = AbstractCard.def.cards[cardKey];
		this.value=this.suit.key+this.card.key;
	}

	getName(){
		return this.card.name+"_of_"+this.suit.name;
	}

	static createDeck=()=>{
		let deck=[]
		for(let i=1;i<=4;i++){
			for(let j=1; j<14;j++){
				deck.push(new AbstractCard(AbstractCard.def.cards[j].name,AbstractCard.def.suits[i].name));
			}
		}
		return _.sortBy(deck,card=>card.value)
		
	}
}