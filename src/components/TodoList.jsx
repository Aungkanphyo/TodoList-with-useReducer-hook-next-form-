import { useReducer } from "react";
import AddTask from "./AddTask";
import TodoComponent from "./TodoComponent";

const TodoList = () => {
  const initialValue = {
    counter: 0,
    todo: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK": {
        const newId = state.counter + 1;
        return {
          counter: newId,
          todo: [
            ...state.todo,
            {
              id: newId,
              task: action.text,
            },
          ],
        };
      }

      case "REMOVE": {
        const id = state.todo.findIndex((todoId) => todoId.id === action.id);
        const todos = state.todo;
        const todos = Object.assign([], state.todo);
        todos.splice(id, 1);
        return {
          todo: todos,
        };
      }
    }
  };
  const [todo, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      {todo.counter}
      <AddTask add={(text) => dispatch({ type: "ADD_TASK", text: text })} />
      {todo.todo.map((list) => (
        <TodoComponent
          key={list.id}
          todo={list}
          remove={() => dispatch({ type: "REMOVE", id: list.id })}
        />
      ))}
    </div>
  );
};

export default TodoList;
