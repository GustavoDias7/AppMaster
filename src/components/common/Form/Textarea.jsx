import { useField } from "@unform/core";
import React, { useEffect, useRef } from "react";
import ErrorMessage from "./ErrorMessage";
import FormRow from "./FormRow";
import Label from "./Label";

const Textarea = ({ id, name, label = null, placeholder = "", ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

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
      <textarea
        id={id}
        name={name}
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={defaultValue !== undefined ? defaultValue : ""}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormRow>
  );
};

export default Textarea;
