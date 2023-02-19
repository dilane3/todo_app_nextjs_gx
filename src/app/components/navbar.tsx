import Image from "next/image";
import styles from "../styles/main.module.css";
import image from "@/assets/d3.jpg";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>TaskApp</span>

      <div className={styles.profileContainer}>
        <Image
          src={image}
          alt="Profile picture"
          className={styles.profileImage}
        />

        <span className={styles.profileName}>Dilane3</span>
      </div>
    </header>
  );
}
