import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    email: "mahamst31@gmail.com",
    age: 22
  }

  let arr = [1, 2, 3]
  return (
    <>
      <h1 className='text-white p-4 rounded-xl mb-4'>Profiles</h1>
      <div className="flex">
        <Card img="./src/assets/maham.jpeg" username="Maham Tahir" desc="Python Developer | Frontend Engineer" btnText="Connect me" />
        <Card img="./src/assets/faiqa.jpeg" username="Faiqa Batool" desc="Mern Stack Developer | Python Programmer" />
      </div>

    </>
  )
}

export default App
