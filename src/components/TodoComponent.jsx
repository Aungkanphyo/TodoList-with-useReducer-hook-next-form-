const TodoComponent = ({ todo, remove }) => {
  return (
    <ol type="i" className="ms-10 mt-4">
      <li>
        {todo.task}
        <button className="px-2 rounded-lg text-white bg-green-500 ms-3 me-3">
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
  );
};

export default TodoComponent;
