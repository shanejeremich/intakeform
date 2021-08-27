import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  dob: Yup.string().matches(
    /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    "Date of Birth must be a valid date in the format MM-DD-YYYY"
  ),
  emailCheckbox: Yup.bool().oneOf([true], "You must agree to be contacted via email")
});
export const formOptions = { resolver: yupResolver(schema), mode: "onChange" };
