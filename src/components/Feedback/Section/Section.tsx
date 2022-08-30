import css from './Section.module.css';
import { ISection } from '../../../../types/appTypes';

export const Section: React.FC<ISection> = ({ title, children }) => {
  return (
    <>
      <p className={css.feedbackTitle}>{title}</p>
      {children}
    </>
  );
};
