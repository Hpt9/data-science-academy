import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Salam Paputu proyekt</h2>
      <h3>Səə n maa qapu demişdün?</h3>
      <Button/>
    </>
  )
}

export default App
