import { useState } from "react";

const AddTask = ({ add }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    add(task);
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
        />
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="bg-blue-500 px-2 rounded-lg ms-3 text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};
export default AddTask;
