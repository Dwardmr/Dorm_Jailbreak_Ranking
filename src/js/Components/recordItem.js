import React from 'react';

export default class RecordItem extends React.Component{
	render() {
		return(
				<tbody>
					<tr>
						<td>{this.props.username}</td>
						<td>{this.props.totalBalance}</td>
						<td>{this.props.rank}</td>
						<td>{this.props.title}</td>
					</tr>
				</tbody>
		);
	}
}