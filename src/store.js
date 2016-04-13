import { createStore } from 'redux';

// App Reducers
import todoReducer from './reducers/todo';

var store = createStore(todoReducer);

export default store;