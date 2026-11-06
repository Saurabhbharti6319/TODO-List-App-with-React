import { useState } from 'react'

import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  const handleEdit = (e,id) => {
 let t =todos.filter(i=>i.id ===id)
 setTodo(t[0].todo)
 let newTodos = todos.filter(item=>{
return item.id!==id
  });
    
    setTodos(newTodos)
  }
  const handleDelete = (e,id) => {
  let newTodos = todos.filter(item=>{
return item.id!==id
  });
    
    setTodos(newTodos)
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo:todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    console.log(e, e.target)
    let id = e.target.name;
    console.log(`the id is ${id}`)
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    console.log(index)
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    console.log(newTodos, todos)
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-400 min-h-[80vh] ">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold text-black'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2 bg-white' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
        </div>
        <h2 className='text-xl font-bold  text-black'>Your Todos</h2>
        <div className='todos flex flex-col items-center '>
          {todos.length==0 && <div className=' text-black m-5'>No Todos To Display</div>}
          {todos.map(item => {
            return <div key={item.id} className="todo flex w-1/4 my-3 justify-between text-black">
              <div className='flex gap-5'>
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons">
                <button onClick={(e)=>handleEdit(e ,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-3'>Edit</button>
                <button onClick={(e)=>{handleDelete(e ,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-3'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
