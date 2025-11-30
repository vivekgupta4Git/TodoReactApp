import { TodoForm } from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, setTodoCompleted, addTodos, deleteTodo } = useTodos();

  return (
    <main className="py-8 bg-red-50 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">My Todos</h1>
      <div className="w-1/2 mx-auto mt-8 bg-slate-50 rounded-2xl p-2 space-y-8">
        <TodoForm onAddTodo={addTodos} />
        <TodoList
          todos={todos}
          setTodoCompleted={setTodoCompleted}
          deleteTodo={deleteTodo}
        />
      </div>
    </main>
  );
}

export default App;
