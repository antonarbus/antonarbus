// pages/hello.js
import { getSession, signIn, signOut, useSession  } from "next-auth/react"

export default function Dashboard() {
  const {data, status} = useSession()

  console.log(data, status)
  return <h1>Hello {data ? data.user.name : ''}</h1>
}
