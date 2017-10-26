import _ from 'lodash';

export default class AbstractCard{
	static def={
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
		 suits:{
		 	1:{key:0,name:'clubs'},
		 	2:{key:14,name:'spades'},
		 	3:{key:28,name:'hearts'},
		 	4:{key:42,name:'diamonds'}
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
		return deck;
	}
}