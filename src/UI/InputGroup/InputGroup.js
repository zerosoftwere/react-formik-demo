import styles from "./InputGroup.module.css";

const InputGroup = ({children}) => {
  return (
    <div className={styles.inputGroup}>
      { children }
    </div>
  )
};

export default InputGroup;