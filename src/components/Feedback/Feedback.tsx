import { IFeedback } from '../../../types/appTypes';
import css from './Feedback.module.css';

export const Feedback: React.FC<IFeedback> = ({ children }) => {
  return <div className={css.feedback}>{children}</div>;
};
