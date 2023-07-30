import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Enter a valid Email"),
  password: Yup.string().min(6).max(16).required("Password is secure"),
});
