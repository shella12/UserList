import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeTask } from "../redux/todos";
import { editTask } from "../redux/todos";

const Todo = (props) => {
  const { todo, markCompleted } = props;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const editTaskHandler = (e) => {
    if (e.key === "Enter") {
      setEdit(false);
      dispatch(editTask({id: todo.id, title: e.target.value}));
    }
  }
  const [task, setTask] =useState(todo.title)
  return (
    <li className="todo">
      <input
        type="checkbox"
        id={todo.id}
        onChange={() => markCompleted(todo)}
        checked={todo.completed}
      />
      <input
        type="text"
        className={todo.completed ? `todo-title completed` : `todo-title`}
        onDoubleClick={() => setEdit(true)}
        readOnly = {!edit}
        onKeyDown={(e) => editTaskHandler(e)}
        onChange={(e) => setTask(e.target.value)}
        value= {task}
      />
      <MdDelete
        onClick={() => dispatch(removeTask(todo.id))}
        className="delete-bin"
      ></MdDelete>
    </li>
  );
};

export default Todo;
