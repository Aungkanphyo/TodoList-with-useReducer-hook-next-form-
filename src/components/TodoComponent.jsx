import { useState } from "react";

const TodoComponent = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [task, setTask] = useState(todo.task);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    edit(task);
    setMode("list");
  };

  return (
    <div>
      {mode === "list" ? (
        <ol type="i" className="ms-10 mt-4">
          <li>
            {todo.task}
            <button
              onClick={() => setMode("edit")}
              className="px-2 rounded-lg text-white bg-green-500 ms-3 me-3"
            >
              Edit
            </button>
            <button
              onClick={remove}
              className="px-2 rounded-lg text-white bg-red-500"
            >
              Remove
            </button>
          </li>
        </ol>
      ) : (
        <form action="" onSubmit={handleFormSubmit} className="ms-10 mt-4">
          <input
            type="text"
            value={task}
            onChange={handleInput}
            name="task"
            className="border border-black"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 px-2 text-white ms-3 me-3 rounded-lg"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setMode("list")}
            className="bg-red-500 px-2 text-white rounded-lg"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default TodoComponent;
