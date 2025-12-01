import type { Todo } from "../types/todo"

interface TodoSummaryProps{
    todos : Todo[]
    onClearCompleted : () => void
}
export default function TodoSummary({todos,onClearCompleted} : TodoSummaryProps){
    if (todos.length === 0) return null
    const completed = todos.filter((todo) => todo.completed).length
    return(
        <div className="flex">
                <p className="text-gray-500 hover:text-black"> Todos {completed}/{todos.length} completed</p>
                <text className="ml-auto cursor-pointer hover:text-red-500 hover:underline" onClick={onClearCompleted}>Clear Completed</text>
        </div>
    )
}