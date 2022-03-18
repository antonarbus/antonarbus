// pages/api/test-session.js
import { getSession } from 'next-auth/react'

export default async function apiRoute(req, res) {
  const session = await getSession({ req })
  if (!session) res.status(401).json({ error: 'Unauthenticated user' })
  if (session) res.status(200).json({ message: 'Success', session })
}