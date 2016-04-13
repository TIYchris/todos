var todoInitialState = {
  todos: []
};

export default function(state = todoInitialState, action) {
  var newState = Object.assign({}, state)

  switch(action.type) {
    
    case 'GET_TODOS':
      newState.todos = action.todos;
      
      return newState;

    default:
      return state;
      
  }
}