import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  static defaultProps = {};

  handleGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
      <div className={css.feedback}>
        <p className={css.feedbackText}>Please leave feedback</p>
        <div>
          <ul className={css.btnList}>
            <li className={css.btnItem}>
              <button
                type="button"
                className={`${css.btn} ${css.good}`}
                onClick={this.handleGoodFeedback}
              >
                Good
              </button>
            </li>
            <li className={css.btnItem}>
              <button
                type="button"
                className={`${css.btn} ${css.neutral}`}
                onClick={this.handleNeutralFeedback}
              >
                Neutral
              </button>
            </li>
            <li className={css.btnItem}>
              <button
                type="button"
                className={`${css.btn} ${css.bad}`}
                onClick={this.handleBadFeedback}
              >
                Bad
              </button>
            </li>
          </ul>
        </div>
        <p className={css.feedbackText}>Statistics</p>
        <ul className={css.statsList}>
          <li className={css.statsItem}>
            <p className={css.statsText}>Good:</p>
            <p className={css.statsText}>{this.state.good}</p>
          </li>
          <li className={css.statsItem}>
            <p className={css.statsText}>Neutral:</p>
            <p className={css.statsText}>{this.state.neutral}</p>
          </li>
          <li className={css.statsItem}>
            <p className={css.statsText}>Bad:</p>
            <p className={css.statsText}>{this.state.bad}</p>
          </li>
          <li className={css.statsItem}>
            <p className={css.statsText}>Total:</p>
            <p className={css.statsText}>{totalFeedback}</p>
          </li>
          <li className={css.statsItem}>
            <p className={css.statsText}>Positive feedback:</p>
            <p className={css.statsText}>
              {positiveFeedbackPercentage ? positiveFeedbackPercentage : 0}%
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
