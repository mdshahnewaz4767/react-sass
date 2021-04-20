import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div>
            <h1>This is a Header</h1>
            <div className="first-box">
                <h2>First Box</h2>
            </div>
            <div className="second-box">
                <h2>Second Box</h2>
            </div>
            <div className="third-box">
                <h2>Third Box</h2>
            </div>
            <div className="fourth-box">
                <h2>Fourth Box</h2>
            </div>
        </div>
    );
};

export default Header;