// users/[userId].js
import { useRouter } from "next/router"

export default function User(props) {
  // const router = useRouter()
  // if (router.isFallback) return <h1>Loading...</h1>

  return (
    <>
      <h3>User details</h3>
      <div>First name: {props.data.first_name}</div>
      <div>Last name: {props.data.last_name}</div> 
      <div>Phone: {props.data.phone_number}</div> 
    </>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { userId: '1' } },
//       { params: { userId: '2' } },
//       { params: { userId: '3' } },
//     ],
//     fallback: true
//   }
// }

export async function getServerSideProps(context) {
  const response = await fetch(`https://random-data-api.com/api/users/random_user?id=${context.params.userId}`)
  // set cookie
  context.res.setHeader('Set-Cookie', ['message=hello'])
  // read cookie
  console.log(context.req.headers.cookie) // message=hello
  //read url parameters for http://localhost:3000/users/2488?a=1&b=2
  console.log(context.query) // { a: '1', b: '2', userId: '2488' }
  
  const result = await response.json()
  return {
    props: {
      data: result,
    }, 
  }
}