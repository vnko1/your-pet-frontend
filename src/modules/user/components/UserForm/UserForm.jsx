import { Formik } from "formik";
import { userSchema } from "./../../../../schemas/userSchema";

import {
  UserFormBody,
  // UserFormBtn,
  UserFormInput,
  UserFormItem,
  UserFormLabel,
  Btn,
} from "./UserForm.styled";

import { updateUser } from "./../../../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";

const initialValues = {
  name: "",
  email: "",
  birthday: "",
  phone: "",
  city: "",
};

const UserForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(
      updateUser({
        name: values.name,
        email: values.email,
        birthday: values.birthday,
        phone: values.phone,
        city: values.city,
      })
    );
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <UserFormBody>
          <UserFormItem>
            <UserFormLabel htmlFor={`name`}>Name:</UserFormLabel>
            <UserFormInput
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder={"Anna"}
            />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`email`}>Email:</UserFormLabel>
            <UserFormInput
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={"anna00@gmail.com|"}
            />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`birthDate`}>Birthday:</UserFormLabel>
            <UserFormInput
              type="text"
              name="birthDate"
              id="birthDate"
              autoComplete="off"
              placeholder={"00.00.0000"}
            />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`phone`}>Phone:</UserFormLabel>
            <UserFormInput
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              placeholder={"+38000000000"}
            />
          </UserFormItem>
          <UserFormItem>
            <UserFormLabel htmlFor={`city`}>City:</UserFormLabel>
            <UserFormInput
              type="text"
              name="city"
              id="city"
              autoComplete="off"
              placeholder={"Kiev"}
            />
          </UserFormItem>
          {/* <UserFormBtn>Log Out</UserFormBtn> */}
          <Btn>Save</Btn>
        </UserFormBody>
      </Formik>
    </>
  );
};

export default UserForm;
