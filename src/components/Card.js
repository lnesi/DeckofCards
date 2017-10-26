import React, { Component } from 'react';

export default class Card extends Component{
	render(){
		const className="card card_"+this.props.card.getName();
		let additionalProps={};
		if(this.props.onClick){
			additionalProps.onClick=()=>this.props.onClick(this.props.card);
		}
		
		return (
			<div className={className} {...additionalProps} data-name={this.props.card.getName()} data-value={this.props.card.value}>
				
			</div>
		)
	}
}