import { Formik } from "formik";

import {
  UserBtnPen,
  UserImgBox,
  UserImgInputBody,
  UserImgInput,
  UserFormBody,
  UserFormBtn,
  UserFormInput,
  UserFormItem,
  UserFormLabel,
} from "./UserForm.styled";

const UserForm = () => {
  return (
    <>
      <UserBtnPen></UserBtnPen>
      <UserImgBox>
        <UserImgInputBody>
          <img alt="Default" />
          <UserImgInput
            id="#$%^&file"
            type="file"
            name="image"
            accept="image/png, image/jpeg"
          />
        </UserImgInputBody>
      </UserImgBox>
      <Formik>
        <UserFormBody>
          <UserFormItem>
            <UserFormLabel htmlFor={`name`}>Name:</UserFormLabel>
            <UserFormInput type="text" name="name" />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`email`}>Email:</UserFormLabel>
            <UserFormInput type="text" name="email" />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`birthDate`}>Birthday:</UserFormLabel>
            <UserFormInput type="text" name="birthDate" />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`phone`}>Phone:</UserFormLabel>
            <UserFormInput type="text" name="phone" />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`city`}>City:</UserFormLabel>
            <UserFormInput type="text" name="city" />
          </UserFormItem>
          <UserFormBtn>Log Out</UserFormBtn>
        </UserFormBody>
      </Formik>
    </>
  );
};

export default UserForm;
