import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li key={option} className={css.btnItem}>
          <button
            type="button"
            className={`${css.btn} ${css[option]}`}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.elementType.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
