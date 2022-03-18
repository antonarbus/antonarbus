import { useRouter } from "next/router"
import randomNumFromTo from "../../helpers/randomNumFromTo"

export default function ProductDetails() {
  const router = useRouter()
  const {params} = router.query
  if (params === undefined) return <>No params</>
  const min = params[0]
  const max = params[1]
  const randomNum = randomNumFromTo(min, max)
  return <>Random number between {min}...{max} is <b>{randomNum}</b></>
}
