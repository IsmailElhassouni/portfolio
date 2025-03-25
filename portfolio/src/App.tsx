import { LoadingScreen } from './components/loadingScreen'
import './App.css'
import { useState } from 'react'
import './index.css'
import {NavBar} from './components/NavBar'
import { Mobile } from './components/Mobile'
import { Home } from './components/sections/Home'
function App() {
  const [loading, setLoading] = useState(false)
  const [menu, setMenu] = useState(false)
  return (
    <> 
        {!loading && <LoadingScreen onComplete={() => setLoading(true)}/>} 
        <div className={`min-h-screen transition-opacity duration-700 ${loading ? 
          "opacity-100" : "opacity-0 "} bg-black tex-gray-100`}>

            <NavBar  menu={menu} setmenu={setMenu}/>
            <Mobile menu={menu} setmenu={setMenu} />
            <Home />
          </div>
    </>
  )
}

export default App
