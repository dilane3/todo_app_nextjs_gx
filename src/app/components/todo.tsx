import TodoEntity from "@/entities/todo";
import { useAction } from "@dilane3/gx";
import styles from "../styles/main.module.css";

type TodoProps = {
  todo: TodoEntity;
};

export default function Todo({ todo }: TodoProps) {
  // Actions
  const { remove, toggle } = useAction("todo");

  // Handle checkbox change
  const handleChange = () => {
    toggle(todo.id);
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todoInfo}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
        <span className={todo.completed ? styles.todoCompleted : ""}>
          {todo.title}
        </span>
      </div>

      <button className={styles.todoBtn} onClick={() => remove(todo.id)}>
        Delete
      </button>
    </div>
  );
}
