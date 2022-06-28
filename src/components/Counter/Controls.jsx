import css from './Counter.module.css';

export default function Controls({ onIncrement, onDecrement }) {
  return (
    <div className={css.wrap}>
      <button type="button" className={css.button} onClick={onIncrement}>
        Increment value
      </button>
      <button type="button" className={css.button} onClick={onDecrement}>
        Decrement value
      </button>
    </div>
  );
}
