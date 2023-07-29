import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { titleChange } from "../../helpers/helpers";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import ChangeStepBtn from "../ChangeStepBtn/ChangeStepBtn";

import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";



const AddPetForm = () => {
    const { currentStep, handleNextStep, handleBackStep, isFirstStep, isLastStep } = useMultistepForm(1);
    const [currentRadioChecked, setCurremtRadioChecked] = useState("your-pet");
    const [avatarFile, setAvavatarFile] = useState("");
    const [selectedSex, setSelectedSex] = useState("");
    const dispatch = useDispatch();

    const initialValues = {
        categories: currentRadioChecked,
        add: '',
        name: '',
        birthday: '',
        type: '',
        sex: selectedSex,
        avatar: avatarFile,
        location: '',
        price: '',
        comments: ''
    };

    return (
        <Formik initialValues={initialValues}>
            {formik => {
                const handleCategories = e => {
                    setCurremtRadioChecked(e.target.value);
                    formik.handleChange(e)
                };

                const handleSex = e => {
                    setSelectedSex(e.target.value);
                    formik.handleChange(e);
                };
                return (
                    <Form>
                        <div>
                            <div>
                                <h2>{currentStep !== 1 ? titleChange(currentRadioChecked) : "Add pet"}</h2>
                            </div>
                            <div>
                                <h3>Choose  option</h3>
                                <h3>Personal details</h3>
                                <h3>More info</h3>
                            </div>

                            {currentStep === 1 && (
                                <FirstStep />
                            )}
                            {currentStep === 2 && (
                                <SecondStep />
                            )}
                            {currentStep === 3 && (
                                <ThirdStep />
                            )}
                        </div>
                        <div>
                            <ChangeStepBtn isFirstStep={isFirstStep} isLastStep={isLastStep} next={handleNextStep} back={handleBackStep} />
                        </div>
                    </Form>
                )
            }}


        </Formik>
    )

};

export default AddPetForm;