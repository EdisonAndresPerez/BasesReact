import { useState, useEffect, useMemo } from "react";

export const useForm = (initialForm = {}, formValidation = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});

  // Validar campos cada vez que cambian
  useEffect(() => {
    const errors = {};
    for (const field in formValidation) {
      const [fn, errorMsg] = formValidation[field];
      errors[field] = fn(formState[field]) ? null : errorMsg;
    }
    setFormErrors(errors);
  }, [formState, formValidation]);

  // Validaciones individuales
  const isNameValid = !formErrors.name;
  const isEmailValid = !formErrors.email;
  const isPasswordValid = !formErrors.password;

  // Validación global
  const isFormValid = useMemo(
    () => Object.values(formErrors).every((err) => err === null),
    [formErrors]
  );

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
    isNameValid,
    isEmailValid,
    isPasswordValid,
    formErrors,
  };
};
