import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { loginSchema } from "./../../../../schemas/loginSchema";
import { logIn } from "./../../../../redux/auth/auth-operations";
import iconClose from "./../../../../assets/icons.svg#eye-closed";
import iconOpen from "./../../../../assets/icons.svg#eye-open";

import {
  InputWrapper,
  FormContainer,
  ErrorMsg,
  PassWrapper,
  Input,
  ShowPassBtn,
  IconShown,
  IconHidden,
  Btn,
  LoginHeader,
  Text,
} from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  const togglePassword = () => setPassword(!password);

  return (
    <Formik onSubmit={handleSubmit} validationSchema={loginSchema}>
      {({ errors, touched }) => (
        <FormContainer>
          <LoginHeader>Login</LoginHeader>
          <InputWrapper>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={"Email"}
              data-error={errors.email && touched.email ? true : false}
            />
            <ErrorMsg
              name="email"
              component="span"
              data-error={errors.email && touched.email ? true : false}
            />
            <PassWrapper>
              <Input
                type={password ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="off"
                placeholder={"Password"}
                data-error={errors.password && touched.password ? true : false}
              />

              <ShowPassBtn
                type="button"
                onClick={togglePassword}
                data-shown={password}
              >
                {password ? (
                  <IconShown src={iconOpen} />
                ) : (
                  <IconHidden src={iconClose} />
                )}
              </ShowPassBtn>
              <ErrorMsg
                name="password"
                component="span"
                data-error={errors.password && touched.password ? true : false}
              />
            </PassWrapper>
          </InputWrapper>
          <Btn type="submit">Login</Btn>
          <Text>
            Don&apos;t have an account?{" "}
            <a href="/your-pet-frontend/register">Register</a>
          </Text>
        </FormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
