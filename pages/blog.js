// pages/blog.js
import { getSession, useSession } from 'next-auth/react'

export default function Blog({ msg }) {
  const {data, status} = useSession()
  console.log(data, status) // just to show that session data is available
  return <h1>Blog page - {msg}</h1>
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false
      }
    }
  }
  return {
    props: {
      msg: session ? 'List of paid blogs' : 'List of free blogs',
      session
    }
  }
}