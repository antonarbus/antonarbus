// pages/api/index.js
export default function handler(req, res) {
  res.status(200).json({ name: 'api home route'})
}