const TodoInput = ({ value, onChange, onAdd }) => (
    <div className="flex flex-col sm:flex-row gap-3">
        <input
            value={value}
            onChange={onChange}
            onKeyDown={(e) => e.key === "Enter" && onAdd()}
            type="text"
            placeholder="What do you need to do?"
            className="t-input flex-1 py-3 px-5 rounded-2xl border shadow-sm"
        />
        <button
            onClick={onAdd}
            disabled={value.trim().length <= 3}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed text-white px-6 py-3 font-bold rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
        >
            Add Task
        </button>
    </div>
);

export default TodoInput;
