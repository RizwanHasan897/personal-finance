import React from "react";
import Avatar from 'react-avatar';




function Header(){
    return(
        <div className="header">

            <div className="available-balance">
                <p className="ava-p">Personal Finance Tracker</p>
                <h1>Available Balance</h1>
                <p className="ava-money">£5000</p>
            </div>

            <div className="date">
                <h1>Tuesday, June 25 2024</h1>
            </div>

            <div className="profile">
                <div className="profile-details">
                    <h1>Muhammad R Hasan</h1>
                    <p>Personal Account</p>
                </div>
                <h1 className="Profile-pic">
                    <Avatar name="Rizwan Hasan" />
                </h1>
            </div>
        </div>
    );
};

export default Header;