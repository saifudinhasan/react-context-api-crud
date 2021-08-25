import { useEffect } from "react";
import Input from "./container/Input";
import TodoList from "./container/TodoLists";
import { useTodoContext } from "./contexts/todo/todoStateProvider";

function App() {

  const { getTodos } = useTodoContext()

  // eslint-disable-next-line
  useEffect(() => getTodos(), [])

  return (
    <div className="app">
      <h1>Todo App with Context API</h1>
      <TodoList />
      <Input />
    </div>
  );
}

export default App;
