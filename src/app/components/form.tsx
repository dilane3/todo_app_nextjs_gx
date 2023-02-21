"use client";

import Todo from "@/entities/todo";
import { useAction, useSignal } from "@dilane3/gx";
import { useState } from "react";
import styles from "../styles/main.module.css";

export default function Form() {
  // Local state
  const [value, setValue] = useState("");

  // Global state
  const todos = useSignal("todo");

  // Actions
  const { add } = useAction("todo");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if value is empty
    if (!value) return;

    // Add todo
    const todo = new Todo(Date.now(), value, false);

    add(todo);

    // Reset input value
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formLabel}>
        <span className={styles.formTitle}>Ajoutez une tache</span>
      </div>

      <div className={styles.formInput}>
        <input
          placeholder="Nommez votre tache..."
          value={value}
          onChange={handleChange}
        />
        <button className={styles.formBtn} type="submit">
          Go
        </button>
      </div>
    </form>
  );
}
