// syncWait.js
export default function syncWait(ms = 1000) {
  const end = Date.now() + ms
  while (Date.now() < end) continue
}
