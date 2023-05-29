import * as yup from "yup";

export const VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter valid email")
    .required("Email address is required"),
  role: yup.object().required("Role is required"),
});

export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Owner",
    value: "owner",
  },
];
