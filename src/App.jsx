// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Registro'
import Registro from './components/Registro'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainContainer'>
        <Registro />
      </div>
    </>
  )
}

export default App
