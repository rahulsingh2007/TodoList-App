import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar"
import { v4 as uuidv4 } from 'uuid';
import { SquarePen, Trash2 } from "lucide-react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  // 1. Load from LocalStorage ONCE on mount
  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let loadedTodos = JSON.parse(todoString);
      setTodos(loadedTodos);
    }
  }, []);

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
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="mx-5 my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] w-1/2">
          <div className="my-5 w-full flex flex-col items-center">
            <h2 className="text-lg font-bold self-start">Add a todo</h2>
            <input onChange={handleChange} value={todo} type="text" className="bg-white w-full py-2 rounded-lg px-2 my-2" />
            <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-violet-800 hover:bg-violet-950 px-2 py-1 text-sm font-bold transition-all duration-150 w-1/2 text-white disabled:bg-violet-400 rounded-md mx-6">Save</button>
          </div>
          
          <div className="flex gap-2 items-center my-4">
            <input type="checkbox" onChange={toggleFinished} checked={showFinished} id="showFinished" /> 
            <label htmlFor="showFinished" className="font-semibold text-sm">Show Finished Only</label>
          </div>

          <h2 className="text-lg font-bold">Your Todos</h2>
          <div>
            {todos.length === 0 && <div className="m-5">No todos to display</div>}
            {todos.map((item) => (
              (showFinished ? item.isCompleted : !item.isCompleted) && (
                <div key={item.id} className="flex justify-between w-full my-2 items-center">
                  <div className="flex gap-5 items-center min-w-0 mr-4">
                    <input name={item.id} onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} className="shrink-0" />
                    <div className={`${item.isCompleted ? "line-through text-gray-500" : ""} break-all min-w-0`}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="flex shrink-0">
                    <button onClick={(e) => { handleEdit(e, item.id) }} className="bg-violet-800 hover:bg-violet-950 px-2 py-1 text-sm font-bold transition-all duration-150 text-white rounded-md mx-1"><SquarePen size={16} /></button>
                    <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-violet-800 hover:bg-violet-950 px-2 py-1 text-sm font-bold transition-all duration-150 text-white rounded-md mx-1"><Trash2 size={16} /></button>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
