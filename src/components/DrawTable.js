import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { sortTable } from '../actions';

class DrawTable extends Component{
	onClickSort(){
		this.props.sortTable();
	}
	render(){
		return(
			<div className="app-container draw-table">
				<div className='container-wrapper'>
					<button className="btn btn-right" onClick={this.onClickSort.bind(this)}>Sort Cards</button>
					<h2>Draw Table:</h2>
					
					<div className="card-holder">
						{this.props.table.map((card,i)=>{
								return <Card card_data={card}  key={i}/>
							})}
					</div>
				</div>
			</div>
			)
	}
}

function mapStateToProps({cards}){
	return {table:cards.table}
}
export default connect(mapStateToProps,{sortTable})(DrawTable);


