import React from 'react';

import InputArea from "./inputArea";
import ScoreSwitch from "./scoreSwitch";

export default class UserInput extends React.Component{
	render(){
		return(
			<div>
				<ScoreSwitch 
					currentBalance = {this.props.userinput.currentBalance}
					totalBalance = {this.props.userinput.totalBalance}
				/>
				<InputArea />
			</div>
		);
	}
}