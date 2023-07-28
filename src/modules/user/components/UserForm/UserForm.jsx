import { Formik } from "formik";

import { useDispatch, useSelector } from "react-redux";

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
import authSelectors from "./../../../../redux/auth/auth-selectors";
import { useState } from "react";

const initialValues = {
  name: null,
  email: null,
  birthday: null,
  phone: null,
  city: null,



const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.selectUser);
  const [users, setUsers] = useState(() => user);


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


  const handleChange = (e) => {
    setUsers((state) => ({ ...state, [e.target.name]: e.target.value }));
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
              value={users.name || ""}
              onChange={(e) => handleChange(e)}

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
              value={users.email || ""}
              onChange={(e) => handleChange(e)}
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
              value={users.birthDate || ""}
              onChange={(e) => handleChange(e)}
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
              value={users.phone || ""}
              onChange={(e) => handleChange(e)}
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

              value={users.city || ""}
              onChange={(e) => handleChange(e)}
            />
          </UserFormItem>
          {/* <UserFormBtn>Log Out</UserFormBtn> */}
          <Btn type="submit">Save</Btn>

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
