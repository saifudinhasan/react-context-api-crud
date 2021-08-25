import acts from "../acts"

// action destructured to {type, payload}
const todosReducer = (state, { type, payload }) => {
  switch (type) {

    case acts.GET_TODOS: return {
      ...state,
      error: null,
      todos: payload
    }

    case acts.POST_TODO: return {
      ...state,
      error: null,
      todos: [...state.todos, payload]
    }

    case acts.PUT_TODO: return {
      ...state,
      error: null,
      todos: state.todos?.map(todo => todo.id === payload.id ? payload : todo)
    }

    case acts.DELETE_TODO: return {
      ...state,
      error: null,
      todos: state.todos?.filter(todo => todo.id !== payload)
    }

    case acts.ADD_ERROR: return { ...state, error: payload }

    default: return state
  }
}

export default todosReducer