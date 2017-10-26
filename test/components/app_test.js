import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  	it('shows a deck',  () =>{	
		expect(component.find(".deck")).to.exist;
	}); 

	it('shows a draw table',  () =>{	
		expect(component.find(".draw-table")).to.exist;
	});

});
