import { useState, useEffect } from 'react'

export default function User() {
  const [isLoading, setIsLoading] = useState(true)
  const [userState, setUserState] = useState(null)
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch('https://random-data-api.com/api/users/random_user')
      const data = await response.json()
      setUserState(data)
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  if (isLoading) return <h2>Loading...</h2>
  return <h2>Name: {userState.first_name}</h2>
}
