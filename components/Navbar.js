// components/Navbar.js
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
  const {data, status} = useSession()

  function signInFunc(e) {
    e.preventDefault() 
    signIn('github') 
  }

  function signOutFunc(e) {
    e.preventDefault() 
    signOut() 
  }

  return (
    <nav className='header'>
      <h1 className='logo'><a href='#'>NextAuth</a></h1>
      <ul className={`main-nav ${status === 'loading' ? 'loading' : 'loaded'}`}>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/dashboard'><a>Dashboard</a></Link></li>
        <li><Link href='/blog'><a>Blog</a></Link></li>
        {!data && status === "unauthenticated" && (
          <li><Link href='/api/auth/signin'><a onClick={signInFunc}>Sign In</a></Link></li>
        )}
        {data && status === 'authenticated' && (
          <li><Link href='/api/auth/signout'><a onClick={signOutFunc}>Sign Out</a></Link></li>
        )}
      </ul>
    </nav>
  )
}
