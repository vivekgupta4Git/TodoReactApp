import { TrashIcon } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 border rounded-md p-2 hover:bg-amber-900 hover:text-white">
      <label className="flex items-center gap-2 ">
        <input
          type="checkbox"
          className="w-5 h-5"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
        />
        <span
          /*  className={
            todo.completed ? "line-through text-red-500 font-bold" : "font-light"
          } */
          className={`relative text-2xl 
            after:absolute after:left-0 after:top-1/2 after:h-0.5 after:bg-black after:w-full after:origin-left 
            after:transition-transform after:duration-300
            ${todo.completed ? "after:scale-x-100 opacity-50" : "after:scale-x-0 opacity-100"}
  `}
        >
          {todo.title}
        </span>
      </label>
      <TrashIcon
        className="w-5 h-5 ml-auto cursor-pointer hover:fill-red-500"
        onClick={() => onDelete(todo.id)}
      />
    </div>
  );
}
