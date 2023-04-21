import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "@/styles/Downloads.module.css";

export default function download() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        <main className={styles.fileInfo}></main>

        <main className={styles.download}>
          <h1>Download Files</h1>
        </main>
      </div>
    </div>
  );
}
