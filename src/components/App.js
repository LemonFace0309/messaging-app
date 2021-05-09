import { useState } from 'react'
import Login from './Login'

function App() {
  const [id, setId] = useState()

  return (
    <>
      <Login onIdSubmit={setId} />
    </>
  )
}

export default App