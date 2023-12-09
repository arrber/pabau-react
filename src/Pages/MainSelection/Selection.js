import React, {useState} from 'react';
import { OPTIONS } from './Data';
import OptionsCards from '../../Components/OptionCards/OptionsCards';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Selection = () => {

    const [step, setStep] = useState(1);

    // Callback function to receive data from the child
    const recieveSelectedOption = (data) => {
        setStep(step + 1);
    //   console.log('Data received from child:', data);
    // setStep(data ? 2 : 1)
    // if(data ==1) {
    //     setStep(2);
    // }
    // else setStep(1);
    };

    // const [currentStep, setCurrentStep] = useState(1);

    // const handleSelectOption = (option) => {
    //     selectedOption(option);
    //     setCurrentStep(2);
    //   };


    return (
        <div className="selection">
            <Header currentStep={step}/>
            <div className="body">
                <OptionsCards />
            </div>
            <Footer/>
             {/* {
                OPTIONS.map((el, index) => {
                    <OptionsCards 
                        image={el.image}
                        name={el.name}
                    />
                })
            } */}
        </div>
    );
};

export default Selection;