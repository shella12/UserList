import TodosList from "../components/TodosList";
import { checkCompleted } from "../redux/todos";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);
  const markCompleted = (todo) => {
    dispatch(checkCompleted(todo.id));
  };

  return (
    <>
      <TodosList todos={todos} markCompleted={markCompleted} />
    </>
  );
};

export default Todos;
