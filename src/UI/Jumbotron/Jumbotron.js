import styles from './Jumbotron.module.css';

const Jumbotron = ({text}) => {
  return (
    <div className={styles.jumbotron}>{ text }</div>
  )
};

export default Jumbotron;