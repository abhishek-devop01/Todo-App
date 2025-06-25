
const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos

   const render = todos.map(todo=>{
    return(
      <div className=" flex items-center mt-4 justify-center">
        <li className=" bg-gray-200 px-7 py-2 text-2xl rounded-xl w-[65%] flex items-center justify-between" 
        key={todo.id}>{todo.title} 
        <span className="font-black cursor-pointer border-3 rounded px-7 py-2" onClick={() =>deleteHandler(todo.id)}>X </span></li>
      </div>
      
    )
  })

   const deleteHandler = (id)=>{
   const filtertodos= todos.filter((todo) => todo.id !=id)
    settodos(filtertodos)
  }
  return (
    <>
      <h1 className="text-6xl mr-80 text-center mt-10 mb-10">Pending Works -</h1>
      <ol className="list-item pl-10 mt-4">{render}</ol>
      <div>
        <h1 className="h-96" ></h1>
      </div>
    </>
  )
}

export default Read