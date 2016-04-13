import React from 'react';
import { deleteTodos, markDone } from 'api/data';

require('assets/styles/todo.scss');


export default React.createClass({
  _delete: function () {
    deleteTodos(this.props.id);
  },
  handleCheckChange: function(e) {
    markDone(this.props.id, e.target.checked);
  },
  render: function () {
    return (
      <div className="todostext">
        <input type="checkbox" value="None" className="checkbox" name="check" checked={this.props.done} onChange={this.handleCheckChange} />        
        <span className="todoText">{this.props.text}</span>
        <span onClick={this._delete} className="delete">X</span>
      </div>
    )
  }
})

