import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useMultistepForm = (beginStep) => {
    const [currentStep, setCurrentStep] = useState(beginStep);
    const stepsQuantity = 3;
    const navigate = useNavigate();

    const handleNextStep = () => {
        if (currentStep < stepsQuantity) {
            setCurrentStep(prev => {
            return prev + 1
        })
        }
    };

    const handleBackStep = () => {
        if (currentStep > 1) {
            return setCurrentStep(prev => {
                return prev - 1
            })
        }
        navigate('/user');
    };

    return {
        currentStep,
        handleNextStep,
        handleBackStep,
        isFirstStep: currentStep === 1,
        isLastStep: currentStep === stepsQuantity,
    }
};


