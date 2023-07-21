import Todo from "./Todo";

const Todos = (props) => {
    const { todos, markCompleted } = props;

  return (
    <ul className="todo-list">
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            markCompleted={markCompleted}
          />
        ))}
    </ul>
  );
};

export default Todos;
