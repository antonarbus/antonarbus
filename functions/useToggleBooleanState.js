import { useState } from 'react'

export default function useToggleBooleanState(initVal = true) {
  const [state, setState] = useState(initVal)
  const toggleState = () => setState(prevVal => !prevVal)
  return [state, toggleState]
}
