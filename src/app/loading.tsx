import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.AnimationContainer}>
        <div className={styles.Animation}>
          <div className={styles.Block}>
            <div className={styles.Block}></div>
            <h1>L</h1>
          </div>
          <div className={styles.Block}>
            <div className={styles.Block}></div>
            <h1>O</h1>
          </div>
          <div className={styles.Block}>
            <div className={styles.Block}></div>
            <h1>A</h1>
          </div>
          <div className={styles.Block}>
            <div className={styles.Block}></div>
            <h1>D</h1>
          </div>
          <div className={styles.Block}>
            <div className={styles.Block}></div>
            <h1>I</h1>
          </div>
          <div className={styles.Block}>
            <div className={styles.Block}></div>
            <div className={styles.Block}></div>
            <h1>N</h1>
          </div>
          <div className={styles.Block}>
            <div className={styles.Block}></div>
            <h1>G</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
