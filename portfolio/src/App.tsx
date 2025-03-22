import { LoadingScreen } from './components/loadingScreen'
import './App.css'
import { useState } from 'react'
import './index.css'
function App() {
  const [loading, setLoading] = useState(false)
  return (
    <> {!loading && <LoadingScreen onComplete={() => setLoading(true)}/>} </>
  )
}

export default App
