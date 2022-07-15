import styles from "./Textarea.module.css";

const Textarea = ({ type, isValid, field }) => {
  const classNames = `
    ${styles.textarea}
    ${isValid ? "" : styles.invalid}`;

  return (
    <textarea
      className={classNames}
      type={type || "text"}
      {...field}
      rows="5"
    />
  );
};

export default Textarea;
