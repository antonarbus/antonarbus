// pages/dashboard.js
import { useState, useEffect } from 'react'
import { getSession, signIn, signOut, useSession  } from "next-auth/react"

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const {data, status} = useSession()

  console.log(data, status)

  useEffect(() => {
    async function securePage() {
      const session = await getSession()
      if (session) setLoading(false)
      if (!session) signIn()
    }
    securePage()
  }, [])

  if (loading) return <h2>Loading...</h2>
  if (!loading) return <h1>Dashboard page {data ? `of ${data.user.name}` : ''}</h1>
}
