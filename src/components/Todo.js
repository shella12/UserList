const Todo = (props) => {
  const { todo, markCompleted } = props;
  return (
    <li className="todo">
    <input type="checkbox" id={todo.id} onChange={() => markCompleted(todo)} checked={todo.completed}/>
      <p className={todo.completed? `todo-title completed`:`todo-title`}>{todo.title}</p>
    </li>
  );
};

export default Todo;
