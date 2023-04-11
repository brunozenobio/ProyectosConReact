import { useState } from 'react'
import './App.css'
import {Target} from './Target'
function App() {
  const [count, setCount] = useState(0)

  return (
   <section>
      <Target></Target>

   </section>
  )
}

export default App
