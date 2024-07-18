import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_APPWRITE_URL
  )



  return (
    <>
     <h1>Blog spot for blogers</h1>
     <h2>{import.meta.env.VITE_APPWRITE_URL}</h2>
     <h2>{import.meta.env.VITE_APPWRITE_URL}</h2>
     <h2>{import.meta.env.VITE_APPWRITE_URL}</h2>
     <h2>{import.meta.env.VITE_APPWRITE_URL}</h2>
     <h2>{import.meta.env.VITE_APPWRITE_URL}</h2>
     <span>{import.meta.env.VITE_APPWRITE_URL}</span>
    </>
  )
}

export default App
