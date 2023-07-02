export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options);
  return (
    <ul>
      <button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </ul>
  );
};
