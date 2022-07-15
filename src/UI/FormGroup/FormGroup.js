import styles from "./FormGroup.module.css";

const FormGroup = ({ label, children, touched, error }) => (
  <div className={styles.formGroup}>
    <label className={styles.label}>{label}</label>
    {children}
    {error && touched && <span className={styles.textInvalid}>{error}</span>}
  </div>
);

export default FormGroup;
