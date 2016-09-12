import React from 'react';

import RecordItem from './recordItem';

export default class RecordTable extends React.Component{
	render() {
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Username</th>
							<th>Total Balance</th>
							<th>Rank</th>
							<th>Title</th>
						</tr>
					</thead>

					<RecordItem
						username = {this.props.recordtable.username}
						totalBalance = {this.props.recordtable.totalBalance}
						rank = {this.props.recordtable.rank}
						title = {this.props.recordtable.title}
					/>
				</table>
			</div>
		);
	}
}