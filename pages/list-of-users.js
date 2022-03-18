// pages/list-of-users.js
import { useRouter } from "next/router"
import { useState } from "react"

export default function Index({ users, usersNum }) {
  const [usersState, setUsersState] = useState(users)
  const [usersNumState, setUsersNumState] = useState(usersNum)
  const updateInput = (e) => setUsersNumState(e.target.value)
  const router = useRouter()
  
  async function fetchUsers() {
    const response = await fetch(`https://random-data-api.com/api/users/random_user?size=${usersNumState}`)
    const result = await response.json()
    setUsersState(result)
    router.push(`list-of-users?size=${usersNumState}`, undefined, { shallow: true })
  }

  return (
    <>
      <input type="number" value={usersNumState} onChange={updateInput}/>
      <button onClick={fetchUsers}>Show</button>
      <h3>List of users</h3>
      {usersState.map(user => <div key={user.first_name}>Name: {user.first_name}</div> )}
    </>
  )
}

export async function getServerSideProps(context) {
  const usersNum = context.query.size || 5
  const response = await fetch(`https://random-data-api.com/api/users/random_user?size=${usersNum}`)
  const result = await response.json()
  return {
    props: {
      users: result,
      usersNum: usersNum
    },
  }
}
