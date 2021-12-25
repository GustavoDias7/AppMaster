import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import Error from "./Error";
import styles from "./Form.module.css";

const Input = ({ type = "text", id, name, placeholder, ...rest }) => {
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
    <div className={styles.formRow}>
      <input
        type={type}
        id={id}
        name={name}
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default Input;
