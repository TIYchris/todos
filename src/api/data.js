import axios from 'axios';
import store from 'store';

const url = "/todos";

export function getTodos() {
  return axios.get(url).then(function(resp) {

    store.dispatch({
      type: 'GET_TODOS',
      todos: resp.data
    });
  });
}

export function deleteTodos(id) {
  return axios.delete(url + id).then(function(resp) {
    getTodos();
  });
}

export function addTodos(payload) {
  return axios.post(url, {
    text: payload
  })
    .then(function(resp) {
      getTodos();
    });
}

export function markDone(id, done) {
  return axios.patch(url + id, {
    done: done
  })
    .then(function(resp) {
      getTodos();
    });
}
