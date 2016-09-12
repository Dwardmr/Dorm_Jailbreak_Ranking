import React from 'react';

export default class InputArea extends React.Component{
	constructor(){
		super();
		this.state = {
			searchVal: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.changeSearch = this.changeSearch.bind(this);
	}
	changeSearch(searchVal){
		this.setState({searchVal: searchVal});
	}
	handleChange(e){
		const searchVal = e.target.value;
		this.changeSearch(searchVal);
	}
	render() {
		return(
			<div>
				<input onChange={this.handleChange} />
				<h5> Searching: {this.state.searchVal} </h5>
			</div>
		);
	}
}