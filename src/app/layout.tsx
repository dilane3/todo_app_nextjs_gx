import Navbar from "./components/navbar";
import "./styles/globals.css";
import styles from "./styles/main.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className={styles.container}>
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
