import styles from "./input.module.css";

const Input = ({ type, isValid, field }) => {
  const classNames = `
    ${styles.input}
    ${isValid ? "" : styles.invalid}`;

  return (
    <input
      className={classNames}
      type={type || "text"}
      {...field}
    />
  );
};

export default Input;
