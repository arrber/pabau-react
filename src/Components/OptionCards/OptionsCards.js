import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const OptionsCards = ({selectedOption}) => {

    return (
        <div className="list-holder">
            <ul className="list">
                <li><NavLink onClick={selectedOption} to="/detail" className="link">Filan Fisteku1</NavLink></li>
                <li><NavLink onClick={selectedOption} to="/detail" className="link">Filan Fisteku2</NavLink></li>
                <li><NavLink onClick={selectedOption} to="/detail" className="link">Filan Fisteku2</NavLink></li>
                <li><NavLink onClick={selectedOption} to="/detail" className="link">Filan Fisteku2</NavLink></li>
            </ul>
        </div>
    );
};

export default OptionsCards;