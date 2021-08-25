import { useTodoContext } from '../contexts/todo/todoStateProvider'
import Todo from './Todo'

const TodoLists = () => {

  // Context consumer
  const { todos, error } = useTodoContext()

  return (
    <ul className="todo-list">
      {todos?.map(todo => <Todo todo={todo} key={todo.id} />)}
      {error && <h3>{error}</h3>}
    </ul>
  )
}

export default TodoLists