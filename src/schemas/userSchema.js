import * as Yup from "yup";

const phoneRules = (/^\+380\d{9}$/, "Phone format +380000000000");
const cityRules = (/^[A-Za-z\s]+$/, "City contain only letters and spaces");
const birthdayRules = (/^\d{2}\.\d{2}\.\d{4}$/, "Birthday format DD.MM.YYYY");

export const userSchema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required("Name is required"),
  email: Yup.string().email("Enter a valid Email").required("Required"),
  birthday: Yup.string().matches(birthdayRules),
  phone: Yup.string().matches(phoneRules, {}),
  city: Yup.string().matches(cityRules),
});
