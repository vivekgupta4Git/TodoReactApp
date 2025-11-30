import { useState } from "react";

interface AddTodoItemFormProps {
  onAddTodo: (title: string) => void;
}

export function TodoForm({ onAddTodo }: AddTodoItemFormProps) {
  const [input, setInput] = useState("");
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTodo(input);
    setInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="border rounded-s-md p-2 grow"
          placeholder="Add a todo"
        />
        <button type="submit" className=" border bg-amber-400 p-2 rounded-e-md hover:bg-amber-500 hover:text-white hover:border hover:border-black hover:p-2">
          Add
        </button>
      </div>
    </form>
  );
}
