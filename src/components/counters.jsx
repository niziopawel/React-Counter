import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onAdd
    } = this.props;

    return (
      <div>
        <button className='btn btn-primary btn-sm m-2' onClick={onAdd}>
          Add
        </button>
        <button className='btn btn-danger btn-sm m-2' onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
