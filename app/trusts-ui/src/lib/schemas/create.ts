import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label("Name")
    .min(5, "Name should have at least 5 characters")
    .max(35, "Name can not be longer than 35 characters"),
  admin: Yup.string()
    .required()
    .label("admin")
    .min(44, "Must be a valid public key")
    .max(44, "Must be a valid public key"),
  isPublic: Yup.string().label("Visibility"),
  deposit: Yup.number()
    .required()
    .label("deposit")
    .min(1, "Minimum deposit is 1 token"),
  percentage: Yup.number().required().label("Percentage"),
  targets: Yup.array()
    .required()
    .label("Targets")
    .min(1, "Must have at least one target")
    .max(5, "Maximum targets is 5"),
  email: Yup.string().email().label("Email"),
});
