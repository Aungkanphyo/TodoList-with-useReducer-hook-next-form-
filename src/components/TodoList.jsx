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
        const todos = Object.assign([], state.todo);
        todos.splice(id, 1);
        return {
          counter: todos.length,
          todo: todos,
        };
      }

      case "RESET":
        return initialValue;

      case "EDIT": {
        const id = state.todo.findIndex((todoId) => todoId.id === action.id);
        const todo = Object.assign({}, state.todo[id]);
        todo.task = action.newTask;
        const todos = Object.assign([], state.todo);
        todos.splice(id, 1, todo);
        return {
          counter: state.counter,
          todo: todos,
        };
      }
    }
  };
  const [todo, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      {todo.counter}
      <AddTask
        add={(text) => dispatch({ type: "ADD_TASK", text: text })}
        reset={() => dispatch({ type: "RESET", payload: initialValue })}
      />
      {todo.todo.map((list) => (
        <TodoComponent
          key={list.id}
          todo={list}
          remove={() => dispatch({ type: "REMOVE", id: list.id })}
          edit={(text) =>
            dispatch({ type: "EDIT", id: list.id, newTask: text })
          }
        />
      ))}
    </div>
  );
};

export default TodoList;
