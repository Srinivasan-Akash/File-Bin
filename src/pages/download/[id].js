import { useRouter } from "next/router"
import Navbar from "../components/Navbar"

export default function download() {
    const router = useRouter()
    const {id} = router.query

    return (
    <div>
      <Navbar></Navbar>
      <main className={styles.fileInfo}>

      </main>
    </div>
  )
}
