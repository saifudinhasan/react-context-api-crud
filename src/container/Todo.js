import { useRef, useState } from "react"
import { useTodoContext } from "../contexts/todo/todoStateProvider"

const Todo = ({ todo }) => {

  const [editTodo, setEditTodo] = useState()
  const inputRef = useRef()

  // Context consumer
  const { putTodo, deleteTodo } = useTodoContext()

  const handleUpdateTodo = async e => {
    e.preventDefault()
    const newInput = inputRef.current.value.trim()

    // Update ...
    await putTodo(todo, { text: newInput })

    setEditTodo(false)
  }

  return (
    <li>

      {!editTodo &&
        <div className="" style={{ textDecoration: todo.completed && "line-through" }}>{todo.text}</div>
      }

      {editTodo &&
        <form onSubmit={handleUpdateTodo} style={{ display: "flex" }}>
          <input type="text" ref={inputRef} defaultValue={todo.text} />
          <button>Save</button>
        </form>
      }

      <button onClick={() => putTodo(todo, { completed: !todo.completed })}>
        {!todo.completed ? 'Done' : 'Cancle Done'}
      </button>

      <button onClick={() => { setEditTodo(!editTodo) }}>
        {editTodo ? 'cancle edit' : 'edit'}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>
        delete
      </button>

    </li>
  )
}


export default Todo