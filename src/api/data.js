import axios from 'axios';
import store from 'store';

export function getTodos() {
  return axios.get('http://localhost:8001/todos').then(function(resp){

    store.dispatch({
      type: 'GET_TODOS',
      todos: resp.data
    });

  });
}

export function deleteTodos (id) {
  return axios.delete('http://localhost:8001/todos/' + id).then(function(resp){
    getTodos();
  });
}

export function addTodos (payload) {
  return axios.post('http://localhost:8001/todos/', {text:payload})
    .then(function(resp){
      getTodos();
    });
}

export function markDone (id, done) {
  return axios.patch('http://localhost:8001/todos/' + id, {done: done})
    .then(function(resp){
      getTodos();
    });
}