import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
    console.log(values.username);
  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};