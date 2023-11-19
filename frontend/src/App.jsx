import { useState } from 'react'
import './App.css'
import AuthPage from './AuthPage'
import ChatsPage from './ChatsPage'

function App() {
  const [user, setUser] = useState(undefined)

  if (!user) {
    return <AuthPage onauth={(user) => setUser(user)} />
  } else {
    <ChatsPage user={(user)} />
  }
}

export default App
