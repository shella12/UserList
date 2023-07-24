import { useDispatch, useSelector } from "react-redux";
import TodosList from "../components/TodosList";
import { checkCompleted } from "../redux/todos";
import { addTask } from "../redux/todos";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);
  const markCompleted = (todo) => {
    dispatch(checkCompleted(todo.id));
  };
  const addNewTask = event => {
    if (event.key === "Enter") {
      dispatch(addTask(event.target.value));
      event.target.value = "";
    }
  };

  return (
    <div className="todos">
    <h1 className="todo-heading">Todos</h1>
    <input type="text" placeholder="add new task ..." className="todo-input" onKeyDown={(e) => addNewTask(e)}/>
      <TodosList todos={todos} markCompleted={markCompleted} />
    </div>
  );
};

export default Todos;
