import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo("");
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="todo"
            value={todo}
            placeholder="Enter a Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              border: "none",
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Add
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button
                  style={{
                    padding: 10,
                    borderRadius: 25,
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "orangered",
                    fontSize: 15,
                    marginLeft: 20,
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
