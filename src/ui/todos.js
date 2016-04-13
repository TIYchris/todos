import React from 'react';
import Todo from 'ui/todo';
import { addTodos }from 'api/data';
import store from 'store';

require('assets/styles/todos.scss');


export default React.createClass({
    getInitialState: function(){
        return {
        	newTodo: ""
        } 
    },
    handleSubmit: function(e){
        e.preventDefault();
        var todo = document.getElementById('todo');
        if (todo.value) {
	        addTodos(todo.value);
	        todo.value = "";
	    }
    },
  	render: function () {
	    return (
	      	<div className="todos">
	      	 	<form method="post" onSubmit={this.handleSubmit}>
	                <input type="text" id="todo" placeholder="What needs to be done?"/>
	             </form>
	            {this.props.todos.map(function(todo){
	            	return <Todo key={todo.id} {...todo} />
	            	})
	        	}
	      	</div>
	    )
  }
})
             