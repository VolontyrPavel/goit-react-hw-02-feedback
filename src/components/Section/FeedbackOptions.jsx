import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return options.map(option => (
    <button type="button" key={option} onClick={()=>onLeaveFeedback(option)}>
      {option[0].toUpperCase() + option.substring(1)}
    </button>
  ));
};

FeedbackOptions.propType = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
