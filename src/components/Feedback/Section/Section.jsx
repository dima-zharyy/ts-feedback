import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <>
      <p className={css.feedbackTitle}>{title}</p>
      {children}
    </>
  );
}
