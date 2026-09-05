import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar"
import { v4 as uuidv4 } from 'uuid';
import { SquarePen, Trash2 } from "lucide-react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const todoString = localStorage.getItem("todos");
    return todoString ? JSON.parse(todoString) : [];
  });
  const [showFinished, setShowFinished] = useState(false);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id);
    if (t.length > 0) setTodo(t[0].todo);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    if (newTodos.length === 0) {
      localStorage.removeItem("todos");
    }
  }

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navbar />
      <main className="grow flex justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-2xl min-h-[75vh] flex flex-col transition-all">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-indigo-900 tracking-tight">Manage Your Day</h1>
            <p className="text-gray-500 mt-2 font-medium">Stay productive and organized.</p>
          </div>

          <div className="w-full mb-8">
            <h2 className="text-lg font-bold text-gray-700 mb-3 px-1">Add a new task</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                onChange={handleChange} 
                value={todo} 
                type="text" 
                placeholder="What do you need to do?"
                className="grow bg-white border border-gray-200 text-gray-800 placeholder-gray-400 py-3 px-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" 
              />
              <button 
                onClick={handleAdd} 
                disabled={todo.length <= 3} 
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed text-white px-6 py-3 font-bold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center whitespace-nowrap"
              >
                Add Task
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-6 px-1">
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input 
                  type="checkbox" 
                  onChange={toggleFinished} 
                  checked={showFinished} 
                  id="showFinished" 
                  className="w-5 h-5 border-gray-300 rounded text-indigo-600 focus:ring-indigo-600 cursor-pointer accent-indigo-600 transition-all"
                /> 
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="showFinished" className="font-semibold text-gray-700 cursor-pointer select-none">Show Finished Only</label>
              </div>
            </div>
          </div>

          <div className="grow">
            <h2 className="text-xl font-bold text-gray-800 mb-4 px-1">Your Tasks</h2>
            
            <div className="space-y-3">
              {todos.length === 0 && (
                <div className="text-center py-10 px-4 bg-white/40 rounded-2xl border border-dashed border-gray-300">
                  <p className="text-gray-500 font-medium">No tasks yet. Add one above!</p>
                </div>
              )}
              
              {todos.map((item) => (
                (showFinished ? item.isCompleted : !item.isCompleted) && (
                  <div key={item.id} className="group flex justify-between w-full p-4 bg-white/80 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 items-center">
                    <div className="flex gap-4 items-center min-w-0 mr-4 grow">
                      <input 
                        name={item.id} 
                        onChange={handleCheckBox} 
                        type="checkbox" 
                        checked={item.isCompleted} 
                        className="w-5 h-5 shrink-0 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600" 
                      />
                      <div className={`text-base font-medium transition-all ${item.isCompleted ? "line-through text-gray-400" : "text-gray-700"} wrap-break-word min-w-0 grow`}>
                        {item.todo}
                      </div>
                    </div>
                    <div className="flex shrink-0 gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <button onClick={(e) => { handleEdit(e, item.id) }} className="p-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700 rounded-xl transition-colors shadow-sm focus:outline-none">
                        <SquarePen size={18} />
                      </button>
                      <button onClick={(e) => { handleDelete(e, item.id) }} className="p-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-xl transition-colors shadow-sm focus:outline-none">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
