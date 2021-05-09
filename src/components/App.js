import Login from './Login'
import Dashboard from './Dashboard'
import useLocalStorage from '../hooks/useLocalStorage'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider'

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashbaord = (
    <ContactsProvider>
    <ConversationsProvider id={id}>
      <Dashboard id={id} />
    </ConversationsProvider>
  </ContactsProvider>
  )

  return id ? dashbaord : <Login onIdSubmit={setId} />
}

export default App
