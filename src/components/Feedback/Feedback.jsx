import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.feedback}>Good: {feedback.good}</li>
      <li className={styles.feedback}>Neutral: {feedback.neutral}</li>
      <li className={styles.feedback}>Bad: {feedback.bad}</li>
      <li className={styles.feedback}>Total: {totalFeedback}</li>
      <li className={styles.feedback}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
