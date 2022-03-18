import { useState } from 'react'

export default function useInput(initVal = '') {
  const [val, setVal] = useState(initVal)
  const reset = () => setVal(initVal)
  const bind = {
    value: val,
    onChange: e => setVal(e.target.value)
  }
  return [val, bind, reset]
}
