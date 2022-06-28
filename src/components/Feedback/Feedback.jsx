import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default function Feedback({ children }) {
  return <div className={css.feedback}>{children}</div>;
}

Feedback.propTypes = {
  children: PropTypes.node,
};
