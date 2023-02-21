"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./styles/main.module.css";
import Form from "./components/form";
import Footer from "./components/footer";
import Todo from "./components/todo";
import { useSignal } from "@dilane3/gx";
import TodoEntity from "@/entities/todo";
import Link from "next/link";
import emptyImage from "@/assets/empty.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Global state
  const todos: TodoEntity[] = useSignal("todo");

  return (
    <section className={styles.appContainer}>
      <section className={styles.appLeft}>
        <div>
          <Form />

          <p className={styles.description}>
            Sentez vous libre de créer des tâches et de les supprimer. Vous
            pouvez également cocher les tâches terminées.
            <br />
            <br />
            Vous avez la possibilité de voir le code source de cette
            application. Cliquez sur le bouton. <br />
            <span>
              <Link href="https://github.com/dilane3/todo_app_nextjs_gx">
                <button className={styles.sourceBtn}>Voir Code Source</button>
              </Link>
            </span>
          </p>
        </div>

        <Footer />
      </section>

      <section className={styles.appRight}>
        <div className={styles.appTodoTitle}>
          <h1>Liste des Tâches</h1>
        </div>

        <div className={styles.appTodoList}>
          {todos.length > 0 ? (
            // Render todos
            todos.map((todo) => <Todo key={todo.id} todo={todo} />)
          ) : (
            <div className={styles.appEmptySection}>
              <Image
                src={emptyImage}
                alt="empty data"
                className={styles.image}
              />

              <p className={styles.emptyText}>Aucune tâche pour le moment</p>
            </div>
          )}
        </div>
      </section>

      <div className={styles.mobileFooter}>
        <Footer />

        <Link href="https://github.com/dilane3/todo_app_nextjs_gx">
          <button className={styles.sourceBtn}>Code Source</button>
        </Link>
      </div>
    </section>
  );
}
