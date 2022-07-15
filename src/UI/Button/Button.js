import styles from "./Button.module.css";

const Button = ({ onClick, type, children, disabled, primary, danger}) => {
  const classNames = `
  ${styles.button}
  ${primary && styles.primary}
  ${danger && styles.danger}
  `
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={classNames}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
