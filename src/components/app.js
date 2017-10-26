import React, { Component } from 'react';

import DrawTable from './DrawTable';
import Deck from './Deck';
import Card from './Card';

export default class App extends Component {
  render() {
    return (
  
    	<div className="app-wrapper">
      		<DrawTable/>
      		<Deck />
      	</div>
    );
  }
}
