// pages/user-swr.js
import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('https://random-data-api.com/api/users/random_user')
  const data = await response.json()
  return data
}

export default function UserSWR() {
  const { data, error } = useSWR('uniqueReqKey', fetcher)
  if (error) return 'An error has occurred.'
  if (!data) return 'Loading...'
  return <h2>Name: {data.first_name}</h2>
}
