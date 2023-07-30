import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { titleChange } from "../../helpers/helpers";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import ChangeStepBtn from "../ChangeStepBtn/ChangeStepBtn";

import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";
import { AddPetFormTitle, Steps, StepTitle, TitleBox } from "./AddPetForm.styled";



const AddPetForm = () => {
    const { currentStep, handleNextStep, handleBackStep, isFirstStep, isLastStep } = useMultistepForm(1);
    const [currentRadioChecked, setCurremtRadioChecked] = useState("your-pet");
    const [avatarFile, setAvatarFile] = useState("");
    const [selectedSex, setSelectedSex] = useState("");
    const [fileIsLoaded, setFileIsLoaded] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState("")
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
                            <TitleBox>
                                <AddPetFormTitle>{currentStep !== 1 ? titleChange(currentRadioChecked) : "Add pet"}</AddPetFormTitle>
                            </TitleBox>
                            <Steps>
                                <StepTitle>Choose  option</StepTitle>
                                <StepTitle>Personal details</StepTitle>
                                <StepTitle>More info</StepTitle>
                            </Steps>

                            {currentStep === 1 && (
                                <FirstStep handleCategories={handleCategories} currentRadioChecked={currentRadioChecked}/>
                            )}
                            {currentStep === 2 && (
                                <SecondStep currentRadioChecked={currentRadioChecked} />
                            )}
                            {currentStep === 3 && (
                                <ThirdStep
                                    currentRadioChecked={currentRadioChecked}
                                    handleSex={handleSex}
                                    avatarFile={avatarFile}
                                    setAvavatarFile={setAvatarFile}
                                    fileIsLoaded={fileIsLoaded}
                                    setFileIsLoaded={setFileIsLoaded}
                                    avatarPreview={avatarPreview}
                                    setAvatarPreview={setAvatarPreview}

                                />
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