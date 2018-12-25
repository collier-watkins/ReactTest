import React, {Component} from 'react';

export default class Counter extends Component {
	state = {
		count: 0,
		imageUrl: 'https://picsum.photos/200',
		tags: ['tag1', 'tag2', 'tag3']
	};

	styles = {
		fontSize: 20,
		fontWeight: "bold"
	};

	constructor() {
		super();
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	handleIncrement(product) {
		console.log('Increment Clicked', this); //Just checking that 'this' is pointing to the Counter class object
		this.setState({ count: this.state.count + 1});
		console.log(product)
	}

	renderTags(){
		if(this.state.tags.length === 0) return <p>There are no tags</p>;

		return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
	}

	render() {
		return ( 
			<React.Fragment>
				<img src={this.state.imageUrl} alt=""/>

				<span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
				
				<button
					onClick={ () => this.handleIncrement( {id:1} )}
					style={{fontSize: 20}}
					className="btn btn-secondary btn-sm"
					>
						Increment
					</button>
				
				{this.renderTags()}

			</React.Fragment>
		);
	}

	formatCount(){
		return this.state.count === 0 ? 'Zero' : this.state.count;
	}

	getBadgeClasses(){
		let classes = "badge m-2 ";
		if(this.state.count === 0)
			classes += "badge-warning";
		else
			classes += "badge-primary";
		return classes;
	}
}


