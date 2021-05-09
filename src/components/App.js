import Login from './Login'
import Dashboard from './Dashboard'
import useLocalStorage from '../hooks/useLocalStorage'
import { ContactsProvider } from '../contexts/ContactsProvider'

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashbaord = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return id ? dashbaord : <Login onIdSubmit={setId} />
}

export default App
