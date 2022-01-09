import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import ErrorMessage from "./ErrorMessage";
import FormRow from "./FormRow";
import Label from "./Label";

const Input = ({
  type = "text",
  id,
  name,
  label = null,
  placeholder = "",
  defaultValue = "",
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <FormRow>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        type={type}
        id={id}
        name={name}
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormRow>
  );
};

export default Input;
