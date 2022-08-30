import css from './FeedbackOptions.module.css';
import { IFeedbackProps } from '../../../../types/appTypes';

export const FeedbackOptions: React.FC<IFeedbackProps> = ({
  options,
  onLeaveFeedback,
}) => {
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
};
