import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Feedback/Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Notification } from './Feedback/Notification/Notification';
import { IAppState } from '../../types/appTypes';

class App extends Component<{}, IAppState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (option: string): void => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
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
    const totalFeedback: number = this.countTotalFeedback();
    const positiveFeedbackPercentage: number =
      this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div>
        <Feedback>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleLeaveFeedback}
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
