import React, { useState } from 'react';
import { Trash2, Plus, Check } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([
  
  ]);
  
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    if (!input.trim()) return; 

    const newTodo = {
      id: Date.now(), 
      text: input,
      completed: false
    };
    
    setTodos([...todos, newTodo]); 
    setInput(""); 
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">My Todo List</h2>
      
      <form onSubmit={addTodo} className="flex gap-2 mb-6">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis tugas baru..." 
          className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition">
          <Plus size={24} />
        </button>
      </form>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li key={todo.id} className={`flex items-center justify-between p-3 rounded-lg border ${todo.completed ? 'bg-slate-900 border-slate-800 opacity-60' : 'bg-slate-700 border-slate-600'}`}>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => toggleTodo(todo.id)}>
              <div className={`w-5 h-5 rounded border flex items-center justify-center ${todo.completed ? 'bg-green-500 border-green-500' : 'border-slate-400'}`}>
                {todo.completed && <Check size={14} className="text-white" />}
              </div>
              <span className={`text-white ${todo.completed ? 'line-through text-slate-400' : ''}`}>
                {todo.text}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-400 hover:text-red-300">
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;