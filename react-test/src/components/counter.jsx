import React, {Component} from 'react';

export default class Counter extends Component {
	state = {
		count: 0,
		imageUrl: 'https://picsum.photos/200'
	};

	styles = {
		fontSize: 20,
		fontWeight: "bold"
	};

	render() {
		return ( 
			<React.Fragment>
				<img src={this.state.imageUrl} alt=""/>
				<span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
				<button style={{fontSize: 20}} className="btn btn-secondary btn-sm">Increment</button>
			</React.Fragment>
		);
	}

	formatCount(){
		return this.state.count === 0 ? 'Zero' : this.state.count;
	}
}


