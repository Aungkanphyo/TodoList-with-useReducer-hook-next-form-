import { useState } from "react";

const AddTask = ({ add, reset }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    add(task);
    setTask("");
  };

  return (
    <div className="ms-10">
      <form action="" onSubmit={handleSubmit}>
        <input
          className="border border-black"
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          required
        />
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="bg-blue-500 px-2 rounded-lg ms-3 me-3 text-white"
        >
          Add Task
        </button>
        <button
          onClick={reset}
          className="bg-red-500 px-2 rounded-lg text-white"
        >
          Reset
        </button>
      </form>
    </div>
  );
};
export default AddTask;
