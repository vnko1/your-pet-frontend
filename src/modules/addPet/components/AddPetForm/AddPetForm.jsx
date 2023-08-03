import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { titleChange } from "../../helpers/helpers";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import ChangeStepBtn from "../ChangeStepBtn/ChangeStepBtn";

import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";
import {
  AddPetFormTitle,
  ChooseSection,
  FormBox,
  Steps,
  StepTitle,
  TitleBox,
} from "./AddPetForm.styled";
import { addPetShema } from "../../../../schemas/addPetShema";
import { addUserPet } from "../../../../redux/auth/auth-operations";
import { newPost } from "../../../../redux/notices/notices-operations";
import { formatDate } from "../../../../shared/utils/formatDate";
import { useNavigate } from "react-router-dom";

const AddPetForm = () => {
  const {
    currentStep,
    handleNextStep,
    handleBackStep,
    isFirstStep,
    isLastStep,
  } = useMultistepForm(1);
  const [currentRadioChecked, setCurremtRadioChecked] = useState("your-pet");
  const [avatarFile, setAvatarFile] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [fileIsLoaded, setFileIsLoaded] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    categories: currentRadioChecked,
    title: "",
    name: "",
    date: "",
    type: "",
    sex: selectedSex,
    file: avatarFile,
    location: "",
    price: "",
    comments: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, date, type, comments, categories } = values;

    const formData = new FormData();

    if (categories === "your-pet") {
      formData.append("name", name);
      formData.append("type", type);
      formData.append("date", formatDate(date));
      formData.append("file", avatarFile);
      comments && formData.append("comments", comments);
    } else {
      Object.entries(values).forEach(([key, value]) => {
        if (key === "categories") {
          formData.append("category", value);

          return;
        } else if (key === "date") {
          formData.append("date", formatDate(value));
          return;
        } else if (key === "file") {
          formData.append("file", avatarFile);
          return;
        } else if (key === "comments") {
          comments && formData.append(key, value);
          return;
        } else if (!value) {
          return;
        } else {
          formData.append(key, value);
        }
      });
    }

    categories === "your-pet"
      ? dispatch(addUserPet(formData))
      : dispatch(newPost(formData));

    resetForm();
    navigate("/user");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addPetShema}
    >
      {(formik) => {
        const handleCategories = (e) => {
          setCurremtRadioChecked(e.target.value);
          formik.handleChange(e);
        };

        const handleSex = (e) => {
          setSelectedSex(e.target.value);
          formik.handleChange(e);
        };

        return (
          <FormBox className="third">
            <ChooseSection>
              <TitleBox className="third">
                <AddPetFormTitle>
                  {currentStep !== 1
                    ? titleChange(currentRadioChecked)
                    : "Add pet"}
                </AddPetFormTitle>
              </TitleBox>
              <Steps className="third">
                <StepTitle isActive={currentStep === 1}>
                  Choose option
                </StepTitle>
                <StepTitle isActive={currentStep === 2}>
                  Personal details
                </StepTitle>
                <StepTitle isActive={currentStep === 3}>More info</StepTitle>
              </Steps>

              {currentStep === 1 && (
                <FirstStep
                  handleCategories={handleCategories}
                  currentRadioChecked={currentRadioChecked}
                />
              )}
              {currentStep === 2 && (
                <SecondStep
                  currentRadioChecked={currentRadioChecked}
                  formik={formik}
                />
              )}
              {currentStep === 3 && (
                <ThirdStep
                  currentRadioChecked={currentRadioChecked}
                  handleSex={handleSex}
                  avatarFile={avatarFile}
                  setAvatarFile={setAvatarFile}
                  fileIsLoaded={fileIsLoaded}
                  setFileIsLoaded={setFileIsLoaded}
                  avatarPreview={avatarPreview}
                  setAvatarPreview={setAvatarPreview}
                  formik={formik}
                />
              )}
            </ChooseSection>
            <ChangeStepBtn
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              next={handleNextStep}
              back={handleBackStep}
            />
          </FormBox>
        );
      }}
    </Formik>
  );
};

export default AddPetForm;
