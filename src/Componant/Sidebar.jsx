import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';




const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

function renderMonths() {
    return months.map((month, index) => (
        <li key={index}>
            <h1>{month}</h1>
        </li>
    ));
}

function SideBar() {
    return (
        <div className="side-bar">
            
            <div className="logo">
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                <h1>Money Manager</h1>
            </div>
            <ul>
                {renderMonths()}
            </ul>
            
            <h1 className="sign-out"><FontAwesomeIcon icon={faRightFromBracket} /></h1>
        </div>

    );
}

export default SideBar;
