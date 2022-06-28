import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Feedback/Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import Notification from './Feedback/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    return Math.round((good / (good + bad + neutral)) * 100);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Feedback>
          <Section title="Please leave feedback">
            <FeedbackOptions
              handleGoodFeedback={this.handleGoodFeedback}
              handleNeutralFeedback={this.handleNeutralFeedback}
              handleBadFeedback={this.handleBadFeedback}
            />
          </Section>
          <Section title="Statistics">
            {totalFeedback === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                totalFeedback={totalFeedback}
                positiveFeedbackPercentage={positiveFeedbackPercentage}
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
              />
            )}
          </Section>
        </Feedback>
      </div>
    );
  }
}

export default App;
