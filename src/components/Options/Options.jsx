import styles from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button
          key={option}
          className={styles.option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 ? (
        <button className={styles.option} onClick={() => onReset()}>
          Reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Options;
