import { useRouter } from "next/router"

export default function download() {
    const router = useRouter()
    const {id} = router.query

    return (
    <div>{id}</div>
  )
}
