import React, {useState} from 'react';
import OptionsCards from '../../Components/OptionCards/OptionsCards';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Selection = () => {
    return (
        <div className="selection">
            <Header currentStep={1}/>
            <div className="body">
                <OptionsCards />
            </div>
            <Footer/>
        </div>
    );
};

export default Selection;