import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({
  handleGoodFeedback,
  handleNeutralFeedback,
  handleBadFeedback,
}) {
  return (
    <ul className={css.btnList}>
      <li className={css.btnItem}>
        <button
          type="button"
          className={`${css.btn} ${css.good}`}
          onClick={handleGoodFeedback}
        >
          Good
        </button>
      </li>
      <li className={css.btnItem}>
        <button
          type="button"
          className={`${css.btn} ${css.neutral}`}
          onClick={handleNeutralFeedback}
        >
          Neutral
        </button>
      </li>
      <li className={css.btnItem}>
        <button
          type="button"
          className={`${css.btn} ${css.bad}`}
          onClick={handleBadFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
}
