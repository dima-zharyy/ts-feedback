import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  totalFeedback,
  positiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) {
  return (
    <ul className={css.statsList}>
      <li className={css.statsItem}>
        <p className={css.statsText}>Good:</p>
        <p className={css.statsText}>{good}</p>
      </li>
      <li className={css.statsItem}>
        <p className={css.statsText}>Neutral:</p>
        <p className={css.statsText}>{neutral}</p>
      </li>
      <li className={css.statsItem}>
        <p className={css.statsText}>Bad:</p>
        <p className={css.statsText}>{bad}</p>
      </li>
      <li className={css.statsItem}>
        <p className={css.statsText}>Total:</p>
        <p className={css.statsText}>{totalFeedback}</p>
      </li>
      <li className={css.statsItem}>
        <p className={css.statsText}>Positive feedback:</p>
        <p className={css.statsText}>{positiveFeedbackPercentage}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
