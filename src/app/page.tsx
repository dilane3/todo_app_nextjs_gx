import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./styles/main.module.css";
import Form from "./components/form";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={styles.appContainer}>
      <section className={styles.appLeft}>
        <div>
          <Form />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam
            molestias, qui neque perferendis iste amet ab fugiat dolore labore.
          </p>
        </div>

        <Footer />
      </section>

      <section className={styles.appRight}>Section droite</section>
    </section>
  );
}
