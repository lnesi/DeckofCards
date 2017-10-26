import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { shuffleDeck, drawCard, drawRandomCard, resetDeck } from '../actions';

class Deck extends Component{
	constructor(props){
		super(props);
		this.state={drawCount:1}
	}
	onChangeCount(e){
		//Add constrains
		if(e.target.value>=1 && e.target.value<=this.props.deck.length){
			this.setState({drawCount:e.target.value})
		}else if(e.target.value>this.props.deck.length){
			this.setState({drawCount:this.props.deck.length});
			alert("You can't draw more cards than available");
		}else{
			this.setState({drawCount:1});
		}
		
	}
	onClickShuffle(){
		this.props.shuffleDeck();
	}
	onCardClick(card){
		
		this.props.drawCard(card);
	}

	onClickDraw(){
		if(this.state.drawCount>=1 && this.state.drawCount<=this.props.deck.length){
			this.props.drawRandomCard(this.state.drawCount);
			this.setState({drawCount:this.props.deck.length-this.state.drawCount});
		}else if(this.state.drawCount>this.props.deck.length){
			this.setState({drawCount:this.props.deck.length});
			alert("You can't draw more cards than available");
		}else{
			this.setState({drawCount:1});
		}

		
	}
	onClickRestart(){
		this.props.resetDeck();
		this.setState({drawCount:1});
	}

	renderDrawForm(){
		if(this.props.deck.length>0){
			return (
				<div className="draw-form">Click on card to draw to the table or insert cards count to draw from the top&nbsp;
						<input min="1" max="52" step="1" className="draw_count" value={this.state.drawCount} onChange={this.onChangeCount.bind(this)} type="number" />
						&nbsp;<button className="btn" onClick={this.onClickDraw.bind(this)}>Draw</button>
					</div>
				)
		}else{
			return(
				<div className="draw-form">
					The deck is empty: &nbsp; <button className="btn" onClick={this.onClickRestart.bind(this)}>Reset Deck</button>
				</div>
			)
		}
		
	}
	

	render(){
		return (
			<div className="app-container deck">
				<div className="container-wrapper">
					<button className="btn btn-right btn-shuffle" onClick={this.onClickShuffle.bind(this)}>Shuffle Deck</button>
					<h2>Deck</h2>
					{this.renderDrawForm()}
					<div className="card-holder">
						{this.props.deck.map((card,i)=>{
							return <Card card={card} onClick={this.onCardClick.bind(this)} key={i}/>
						})}
					</div>
				</div>
			</div>
			)
	}
} 

function mapStateToProps({cards}){
	return {deck:cards.deck};
}

export default connect(mapStateToProps,{shuffleDeck,drawCard,drawRandomCard,resetDeck})(Deck);