import React from 'react';

const Header = ({currentStep}) => {
    return (
        <div className="header">
            <h3>Current Step</h3>
            <h4>Step: {currentStep}/2</h4>
        </div>
    );
};

export default Header;