// page1.js
import { useRouter } from "next/router"

export default function Page1() {
  const router = useRouter()
  const goTo = () => router.push('/page2')
  return <>
    <h2>Page 1</h2>
    <button onClick={goTo}>Go to Page 2</button>
  </>
}
