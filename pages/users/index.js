// users/index.js
import Link from 'next/link'
import styled from 'styled-components'

// const Div = styled.div`
//   border: 5px solid green;
//   padding: 5px;
//   h3 { 
//     color: orange;
//   }
// `

export default function Index(props) {
  return (
    <div>
      <h3>List of users</h3>
      {props.data.map(user => (
        <Link key={user.first_name} href={`users/${user.id}`} passHref>
          <div style={{color: 'red'}}>Name: {user.first_name}</div>
        </Link>
      ))}
    </div>
  )
}





export async function getServerSideProps() {
  const response = await fetch('https://random-data-api.com/api/users/random_user?size=5')
  const result = await response.json()
  console.log(result)
  return {
    props: {
      data: result
    },
  }
}
