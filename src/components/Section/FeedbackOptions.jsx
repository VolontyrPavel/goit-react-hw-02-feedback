import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  addFeedback = name => {
    switch (name) {
      case 'good':
        this.props.onLeaveFeedback({ good: this.props.options.good + 1 });
        break;
      case 'neutral':
        this.props.onLeaveFeedback({ neutral: this.props.options.neutral + 1 });
        break;
      case 'bad':
        this.props.onLeaveFeedback({ bad: this.props.options.bad + 1 });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <>
        <button
          type="button"
          name="good"
          onClick={() => this.addFeedback('good')}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={() => this.addFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bad"
          onClick={() => this.addFeedback('bad')}
        >
          Bad
        </button>
      </>
    );
  }
}

FeedbackOptions.propType = {
  options: PropTypes.objectOf(
    PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  })).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
