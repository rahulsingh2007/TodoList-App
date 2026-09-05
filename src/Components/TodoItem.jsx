import { SquarePen, Trash2 } from "lucide-react";

const TodoItem = ({ item, onToggle, onEdit, onDelete }) => (
    <div className="t-item group flex items-center gap-4 p-4 border border-transparent rounded-2xl shadow-sm">
        <input
            type="checkbox"
            name={item.id}
            checked={item.isCompleted}
            onChange={onToggle}
            className="w-5 h-5 shrink-0 rounded accent-indigo-600 cursor-pointer"
        />

        <span className={`flex-1 text-base font-medium break-words min-w-0 transition-all ${item.isCompleted ? "t-task-done line-through" : "t-task"}`}>
            {item.todo}
        </span>

        <div className="flex gap-2 shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            <button onClick={(e) => onEdit(e, item.id)} title="Edit" className="t-btn-edit p-2 rounded-xl">
                <SquarePen size={18} />
            </button>
            <button onClick={(e) => onDelete(e, item.id)} title="Delete" className="t-btn-del p-2 rounded-xl">
                <Trash2 size={18} />
            </button>
        </div>
    </div>
);

export default TodoItem;
