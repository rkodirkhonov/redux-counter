import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./features/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          dispatch(addTodo(input));
          setInput("");
        }}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
