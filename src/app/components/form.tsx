import styles from "../styles/main.module.css"

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.formLabel}>
        <span className={styles.formTitle}>Ajoutez une tache</span>
      </div>

      <div className={styles.formInput}>
        <input placeholder="Nommez votre tache..." />
        <button className={styles.formBtn}>Go</button>
      </div>
    </form>
  )
}