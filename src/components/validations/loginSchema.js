// validation/loginSchema.js

import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
 mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Please enter a valid mobile number")
    .required("Mobile number is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});