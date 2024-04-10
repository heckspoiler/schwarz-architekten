import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.AnimationContainer}>
        <div className={styles.Animation}>
          <div className={styles.Block}></div>
          <div className={styles.Block}></div>
          <div className={styles.Block}></div>
        </div>
        <h1>Loading</h1>
      </div>
    </div>
  );
};

export default Loading;
