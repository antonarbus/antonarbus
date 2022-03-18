// page2.js
import { useRouter } from "next/router"

export default function Page2() {
  const router = useRouter()
  const goTo = () => router.replace('/page1')
  return <>
    <h2>Page 2</h2>
    <button onClick={goTo}>Go to Page 1 & delete navigation history</button>
  </>
}