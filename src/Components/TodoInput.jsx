const TodoInput = ({ value, onChange, onAdd }) => (
    <div className="flex flex-col sm:flex-row gap-3">
        <input
            value={value}
            onChange={onChange}
            onKeyDown={(e) => e.key === "Enter" && onAdd()}
            type="text"
            placeholder="What do you need to do?"
            className="flex-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 py-3 px-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
        />
        <button
            onClick={onAdd}
            disabled={value.trim().length <= 3}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-900 disabled:cursor-not-allowed text-white px-6 py-3 font-bold rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
        >
            Add Task
        </button>
    </div>
);

export default TodoInput;
