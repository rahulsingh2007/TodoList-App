import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Components/Navbar";
import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import TodoFilter from "./Components/TodoFilter";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [showFinished, setShowFinished] = useState(false);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.removeItem("todos");
    }
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim().length <= 3) return;
    setTodos([...todos, { id: uuidv4(), todo: todo.trim(), isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => setTodo(e.target.value);

  const handleEdit = (e, id) => {
    const target = todos.find((item) => item.id === id);
    if (target) setTodo(target.todo);
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleDelete = (e, id) => setTodos(todos.filter((item) => item.id !== id));

  const handleToggle = (e) => {
    const id = e.target.name;
    setTodos(todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  const visibleTodos = todos.filter((item) =>
    showFinished ? item.isCompleted : !item.isCompleted
  );

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navbar />

      <main className="flex-1 flex justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="t-card backdrop-blur-xl border shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-2xl min-h-[75vh] flex flex-col transition-all duration-300">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="t-title text-3xl font-extrabold tracking-tight">Manage Your Day</h1>
            <p className="t-subtitle mt-2 font-medium">Stay productive and organized.</p>
          </div>

          {/* Add Task */}
          <section className="w-full mb-8">
            <h2 className="t-label text-lg font-bold mb-3 px-1">Add a new task</h2>
            <TodoInput value={todo} onChange={handleChange} onAdd={handleAdd} />
          </section>

          {/* Filter Toggle */}
          <TodoFilter showFinished={showFinished} onToggle={() => setShowFinished((p) => !p)} />

          {/* Task List */}
          <section className="flex-1">
            <h2 className="t-heading text-xl font-bold mb-4 px-1">
              {showFinished ? "Completed Tasks" : "Active Tasks"}
            </h2>

            {visibleTodos.length === 0 ? (
              <div className="t-empty text-center py-10 px-4 rounded-2xl border border-dashed font-medium">
                {showFinished ? "No completed tasks yet." : "No active tasks. Add one above!"}
              </div>
            ) : (
              <div className="space-y-3">
                {visibleTodos.map((item) => (
                  <TodoItem
                    key={item.id}
                    item={item}
                    onToggle={handleToggle}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;
