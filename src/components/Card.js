import React, { Component } from 'react';

export default class Card extends Component{
	render(){
		const className="card card_"+this.props.card_data.card.name+"_of_"+this.props.card_data.suite.name;
		let additionalProps={};
		if(this.props.onClick){
			additionalProps.onClick=()=>this.props.onClick(this.props.card_data);
		}
		
		return (
			<div className={className} {...additionalProps}>
				
			</div>
		)
	}
}