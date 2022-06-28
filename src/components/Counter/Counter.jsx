import React from 'react';
import css from './Counter.module.css';
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div>
        <span className={css.span}>{this.state.value}</span>

        <Controls
          onDecrement={this.handleIncrement}
          onIncrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
