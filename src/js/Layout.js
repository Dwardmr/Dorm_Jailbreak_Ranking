import React from "react";

import RecordTable from "./Components/recordTable";
import UserInput from "./Components/userInput";

export default class Layout extends React.Component{

    render() {
        const user = {
            username: 'AverageRandom',
            totalBalance: 9000,
            currentBalance: 3000,
            rank: 1,
            title: 'Escape Artist',

        }

        return (
            <div class="container">
                <div class="row">
                    <div class="col l12 center-align">
                        <h1>Ranking</h1>
                    </div>

                    <UserInput userinput={user} />
                    <RecordTable recordtable={user} />
                </div>
            </div>
        );
    }
}
