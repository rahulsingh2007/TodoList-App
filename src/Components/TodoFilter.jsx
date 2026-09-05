const TodoFilter = ({ showFinished, onToggle }) => (
    <label htmlFor="showFinished" className="flex items-center gap-3 mb-6 px-1 cursor-pointer select-none group w-fit">
        <div className="relative">
            <input type="checkbox" id="showFinished" checked={showFinished} onChange={onToggle} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-checked:bg-indigo-600 rounded-full transition-colors duration-200" />
            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-5" />
        </div>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            Show Completed Tasks
        </span>
    </label>
);

export default TodoFilter;
