import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './App.css';
import { observable } from 'mobx';

@observer
class App extends Component {
  componentWillUpdate() {
    console.log('will update');
  }

  handlePress = e => {
    if (e.keyCode === 13) {
      console.log('e', e);
      this.props.store.createTodo(e.target.value);
      e.target.value = '';
    }
  };

  handleFilter = e => {
    this.props.store.filter = e.target.value;
  };

  toggleComplete = item => {
    item.completed = !item.completed;
  };

  showCompleted = () => {
    this.props.store.showAll = !this.props.store.showAll;
  };

  handleClear = () => {
    this.props.store.handleClear();
  };

  render() {
    const { filteredTodos, showAll } = this.props.store;

    return (
      <div>
        <input placeholder="add new todo" onKeyUp={this.handlePress} />
        <input placeholder="filter todos" onKeyUp={this.handleFilter} />
        <div>{showAll ? 'All' : 'Only Completed'}</div>
        <ul>
          {filteredTodos.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => this.toggleComplete(item)}
                />
                {item.name}
              </li>
            );
          })}
        </ul>
        <button onClick={this.showCompleted}>{showAll ? 'show competed' : 'show all'}</button>
        <button onClick={this.handleClear}>clear completed</button>
      </div>
    );
  }
}

export default App;
