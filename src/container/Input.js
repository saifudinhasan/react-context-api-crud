import { useRef } from "react"
import { useTodoContext } from "../contexts/todo/todoStateProvider"

const Input = () => {
  const todoRef = useRef()

  // Context consumer
  const { postTodo } = useTodoContext()

  const handleSubmit = async e => {
    e.preventDefault()

    const initialTodo = {
      text: todoRef.current.value.trim(),
      completed: false
    }

    // Post ...
    await postTodo(initialTodo)

    todoRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={todoRef} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default Input