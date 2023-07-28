import { ErrorMessage, Formik } from "formik";
import UserForm from "../UserForm/UserForm";

import {
  UserPage,
  UserPageItem,
  UserFormTitle,
  UserFormBox,
  UserInputWrapper,
  UserInput,
  UserImg,
  UserInputFile,
  UserBtnPen,
  Icon,
} from "./UserData.styled";
import { Form } from "react-router-dom";
import { avatarSchema } from "./../../../../schemas/avatarSchema";

import avatar from "./../../../../images/avatarDefault-image/Avatar.png";
import sprite from "../../../../assets/icons.svg";

const initialValues = {
  image: null,
};


const UserData = () => {
  return (
    <UserPage>
      <UserPageItem>
        <UserFormTitle>My information:</UserFormTitle>
        <UserFormBox>
          <UserBtnPen>
            <Icon>
              <use href={sprite + "#edit"} />
            </Icon>
          </UserBtnPen>
          <Formik initialValues={initialValues} validationSchema={avatarSchema}>
            <Form>
              <UserInputWrapper>
                <UserInput>
                  <UserImg src={avatar} alt="Default" />
                </UserInput>

                <UserInputFile id="#$%^&file" type="file" name="image" hidden />
                <ErrorMessage name="image" />
              </UserInputWrapper>
            </Form>
          </Formik>
          <UserForm />
        </UserFormBox>
      </UserPageItem>
    </UserPage>
  );
};

export default UserData;
