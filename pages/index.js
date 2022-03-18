export default function Home(props) {
  return (
    <>
      <h1> Home page </h1>
      <div>User: <b>{props.user}</b></div>
      <div>Password: <b>{props.password}</b></div>
      <div>Direct access to an environment variable: <b>{process.env.NEXT_PUBLIC_NOT_A_SECRET}</b></div>
    </>
  )
}

export async function getServerSideProps() {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  return {
    props: {
      user,
      password
    },
  }
}
