import React from 'react';
import Todos from 'ui/todos';
import store from 'store';
import { getTodos } from 'api/data';

export default React.createClass({
  getInitialState: function () {
    return {
      todos: []
    };
  },
  componentWillMount: function () {
    getTodos()
    store.subscribe(function(){
      var currentStore = store.getState();
      this.setState({
        todos: currentStore.todos
      })
    }.bind(this));
  },  
  render: function () {
    return (
      <Todos todos={this.state.todos} />
    )
  }
})