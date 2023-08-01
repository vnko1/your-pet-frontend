import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = Yup.object().shape({
  username: Yup.string().min(2).max(16).required("Required"),
  email: Yup.string().email("Enter a valid Email").required("Required"),
  password: Yup.string()
    .min(6)
    .max(16)
    .matches(passwordRules, {
      message: "Please create a stronger password",
    })
    .required("Required"),
});
