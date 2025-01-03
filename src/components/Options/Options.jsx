import styles from "./Options.module.css";

const Options = ({ handleReset, totalFeedback, updateFeedback }) => {
  return (
    <div className={styles.container}>
      <button
        className="btnReset"
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
