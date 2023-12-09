import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {    
        navigate('/');
    }
    

    return (
        <div className="details">
            <Header currentStep={2}/>
            <h3>TEST</h3>
            <button onClick={handleGoBack}>Back</button>
            <Footer/>
        </div>
    );
};

export default Details;