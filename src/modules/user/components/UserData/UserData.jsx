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
  IconShown,
} from "./UserData.styled";
import { Form } from "react-router-dom";

import avatar from "./../../../../images/avatarDefault-image/Avatar.png";
import user from "./../../../../assets/icons.svg#check ";

const UserData = () => {
  return (
    <UserPage>
      <UserPageItem>
        <UserFormTitle>My information:</UserFormTitle>
        <UserFormBox>
          <UserBtnPen>
            <IconShown src={user} />
          </UserBtnPen>
          <Formik>
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
