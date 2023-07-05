import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Section/FeedbackOptions';
import { Notification } from './Section/Notification';
import { Statistics } from './Section/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  }); 
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    console.log(Object.keys(this.state));
    const options = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave feetback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statitics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'No feedback given'}/>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
