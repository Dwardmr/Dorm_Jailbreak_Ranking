import React from 'react';

export default class ScoreSwitch extends React.Component{
	constructor(){
		super();
		this.state = {
			toggle: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.toggleActive = this.toggleActive.bind(this);
	}
	toggleActive(toggle){
		this.setState({toggle: toggle});
	}
	handleChange(e){
		const toggle = e.target.checked;
		this.toggleActive(toggle);
	}
	render(){
		const activeBalance = this.state.toggle ? this.props.totalBalance : this.props.currentBalance;
		const balanceType = this.state.toggle ? 'Total' : 'Current';

		return(
			<div>
				<div class="switch">
				    <label>
				      	Current
		      			<input type="checkbox" onChange={this.handleChange} />
				      	<span class="lever"></span>
				      	Total
				    </label>
			  	</div>
			  	<div>
			  		<p>Your {balanceType} Balance is: {activeBalance}.</p>
			  	</div>
			</div>
		);
	}
}