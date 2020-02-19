import React from 'react';
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  function handleTodoFilterChange (e) {
    props.dispatch({
      type: 'TODO_FILTER_CHANGE',
      payload: { filter: e.target.value }
    })
  }

  return (
    <div>
      Hello, React Redux!
      <div>
        <select onChange={handleTodoFilterChange} value={props.filter}>
          <option>completed</option>
          <option>all</option>
          <option>not completed</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ filter: state.todoFilter })

export default connect(mapStateToProps)(App);
