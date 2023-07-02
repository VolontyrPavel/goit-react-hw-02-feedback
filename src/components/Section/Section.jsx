import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    console.log(e);
    switch (e.target.name) {
      case 'good':
        this.setState(prevState => {
          return { good: (prevState.good += 1) };
        });
        break;
      case 'neutral':
        this.setState(prevState => {
          return { neutral: (prevState.neutral += 1) };
        });
        break;
      case 'bad':
        this.setState(prevState => {
          return { bad: (prevState.bad += 1) };
        });
        break;

      default:
        break;
    }
  };

  addFeedback = e => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'good':
        this.setState(prevState => {
          return { good: (prevState.good += 1) };
        });
        break;
      case 'neutral':
        this.setState(prevState => {
          return { neutral: (prevState.neutral += 1) };
        });
        break;
      case 'bad':
        this.setState(prevState => {
          return { bad: (prevState.bad += 1) };
        });
        break;

      default:
        break;
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.addFeedback()}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Statistics
            title="Statitics"
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        )}
      </>
    );
  }
}
