import { useEffect, useState } from "react";

import type { Todo } from "../types/todo";

export default function useTodos(){
    const [todos, setTodos] = useState(()=>{
        const storedTodos : Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return storedTodos
      });
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      },[todos])
    
      function setTodoCompleted(id: number, hasCompleted: boolean) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: hasCompleted } : todo
          )
        );
      }
      function addTodos(title: string) {
        setTodos((prevTodos) => [
          ...prevTodos,
          { id: Date.now(), title: title, completed: false },
        ]);
      }
      function deleteTodo(id: number) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    
      return {
        todos,
        setTodoCompleted,
        addTodos,
        deleteTodo
      }
}