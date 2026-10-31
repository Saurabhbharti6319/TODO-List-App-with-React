import { useState } from 'react'

import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-400 min-h-[80vh] ">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold text-black'>Add a Todo</h2>
          <input type="text" className='w-1/2 bg-white' />
          <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
        </div>
          <h2 className='text-xl font-bold  text-black'>Your Todos</h2>
      <div className='todos'>
        <div className="todo flex justify-center">
          <div className="text text-black">Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
          <div className="buttons">
            <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-3'>Edit</button>
            <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-3'>Delete</button>
          </div>
        </div>
        </div>


      </div>
    </>
  )
}

export default App
