import { createContext, useContext, useReducer } from "react";
import todoReducer from "./todoReducer";
import acts from '../acts'
import axios from 'axios'

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [],
    error: null
  }
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const URL = 'http://localhost:9000/todos/'

  // GET ...
  const getTodos = async () => {
    try {
      const response = await axios.get(URL)
      return dispatch({ type: acts.GET_TODOS, payload: response.data })
    } catch (error) {
      dispatch({ type: acts.ADD_ERROR, payload: error.message })
    }
  }


  // POST ...
  const postTodo = async (newTodo) => {
    try {
      const response = await axios.post(URL, newTodo)
      dispatch({ type: acts.POST_TODO, payload: response.data })
    } catch (error) {
      dispatch({ type: acts.ADD_ERROR, payload: error.message })
    }
  }


  // PUT ...
  const putTodo = async (todo, newData) => {
    const updateTodo = {
      ...todo,
      ...newData
    }

    try {
      const response = await axios.put(URL + todo.id, updateTodo)
      dispatch({ type: acts.PUT_TODO, payload: response.data })
    } catch (error) {
      dispatch({ type: acts.ADD_ERROR, payload: error.message })
    }
  }


  // DELETE ...
  const deleteTodo = async (todoID) => {
    try {
      await axios.delete(URL + todoID)
      dispatch({ type: acts.DELETE_TODO, payload: todoID })
    } catch (error) {
      dispatch({ type: acts.ADD_ERROR, payload: error.message })
    }
  }



  const value = {
    todos: state.todos,
    error: state.error,
    getTodos, postTodo, putTodo, deleteTodo
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}