"use client"

import GXProvider from "@dilane3/gx";
import Navbar from "./components/navbar";
import "./styles/globals.css";
import styles from "./styles/main.module.css";

import store from "@/gx/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GXProvider store={store}>
      <html lang="en">
        <head />
        <body>
          <main className={styles.container}>
            <Navbar />

            {children}
          </main>
        </body>
      </html>
    </GXProvider>
  );
}
