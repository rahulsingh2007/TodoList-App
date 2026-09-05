import { SquarePen, Trash2 } from "lucide-react";

const TodoItem = ({ item, onToggle, onEdit, onDelete }) => (
    <div className="group flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
        <input
            type="checkbox"
            name={item.id}
            checked={item.isCompleted}
            onChange={onToggle}
            className="w-5 h-5 shrink-0 rounded accent-indigo-600 cursor-pointer"
        />

        <span className={`flex-1 text-base font-medium wrap-break-word min-w-0 transition-all ${item.isCompleted ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-700 dark:text-gray-200"}`}>
            {item.todo}
        </span>

        <div className="flex gap-2 shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            <button onClick={(e) => onEdit(e, item.id)} title="Edit" className="p-2 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/70 rounded-xl transition-colors">
                <SquarePen size={18} />
            </button>
            <button onClick={(e) => onDelete(e, item.id)} title="Delete" className="p-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/60 rounded-xl transition-colors">
                <Trash2 size={18} />
            </button>
        </div>
    </div>
);

export default TodoItem;
