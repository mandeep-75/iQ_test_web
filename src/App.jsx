import { useState } from 'react'
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from './components';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
