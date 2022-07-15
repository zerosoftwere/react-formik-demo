import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "../Button/Button";
import FormGroup from "../FormGroup/FormGroup";
import styles from "./Form.module.css";

const Form = forwardRef(({ items, onSubmit }, ref) => {
  const refs = useRef({});

  const getValue = () =>
    Object.fromEntries(
      new Map(
        Object.entries(refs.current).map(([key, ref]) => [key, ref.value])
      )
    );

  const clearValue = () =>
    Object.entries(refs.current).forEach(([_, ref]) => ref.clear());

  const isValid = () =>
    Object.entries(refs.current).every(([_, ref]) => ref.valid);

  useImperativeHandle(ref, () => ({
    get value() {
      return getValue();
    },
    get valid() {
      return isValid();
    },
    clear() {
      clearValue();
    },
  }));

  const handleSubmit = () => onSubmit(getValue());

  const formGroups = items.map((item) => (
    <FormGroup
      ref={(el) => (refs.current[item.name] = el)}
      validator={item.validator}
      value={item.value}
      label={item.label}
      type={item.type}
      key={item.name}
    />
  ));

  return (
    <form className={styles.form}>
      {formGroups}
      <Button onClick={handleSubmit}>Register</Button>
    </form>
  );
});

export default Form;
