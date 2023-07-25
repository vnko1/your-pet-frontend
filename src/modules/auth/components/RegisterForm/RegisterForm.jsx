import { useDispatch } from "react-redux";
import { useState } from "react";
import { Formik } from "formik";
import { registerSchema } from "./../../../../schemas/registerSchema";
import {
  FormContainer,
  InputWrapper,
  Input,
  Btn,
  ErrorMsg,
  IconHidden,
  IconShown,
  PassWrapper,
  ShowPassBtn,
  Text,
  RegisterHeader,
} from "./RegisterForm.styled";
import { registration } from "./../../../../redux/auth/auth-operations";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      registration({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <RegisterHeader>Registration</RegisterHeader>
          <InputWrapper>
            <Input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder={"Name"}
              data-error={errors.username && touched.username ? true : false}
            />
            <ErrorMsg name="username" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={"Email"}
              data-error={errors.email && touched.email ? true : false}
            />
            <ErrorMsg name="email" component="span" />
          </InputWrapper>

          <InputWrapper>
            <PassWrapper>
              <Input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="off"
                placeholder={"Password"}
                data-error={errors.password && touched.password ? true : false}
              />

              <ShowPassBtn
                type="button"
                onClick={togglePassword}
                data-shown={passwordShown}
              >
                {passwordShown ? <IconShown /> : <IconHidden />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>

          <InputWrapper>
            <PassWrapper>
              <Input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="off"
                placeholder={"Confirm password"}
                data-error={errors.password && touched.password ? true : false}
              />

              <ShowPassBtn
                type="button"
                onClick={togglePassword}
                data-shown={passwordShown}
              >
                {passwordShown ? <IconShown /> : <IconHidden />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>
          <Btn type="submit">Registration</Btn>
          <Text>
            Already have an account?{" "}
            <a href="/your-pet-frontend/login">Login</a>
          </Text>
        </FormContainer>
      )}
    </Formik>
  );
};

export default RegistrationForm;
