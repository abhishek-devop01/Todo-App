import { useState } from 'react';
import { nanoid } from 'nanoid';

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");


   const submithandler = (e) => {
      e.preventDefault();
      
      const newtodo = {
        id: nanoid(),
        title: title,
        iscompleted: false
      }
      settodos([...todos, newtodo])
  
      settitle("")
    };
  return (
    <>
      <div className='text-8xl font-black'>
        <h1>TODO <br />  <span className='font-mono font-normal pl-10'><span>-</span>LIST</span> </h1>
      </div>
     <hr />
    <div className='  mt-8 text-center flex-col items-center justify-center'>
       <form onSubmit={submithandler}>
        <input className='w-[50%] border-b-2 rounded p-2 text-3xl'
          value={title}
          required
          onChange={(e) => {
            settitle(e.target.value);
          }}
          placeholder="Enter Your Task..."
          type="text"
        /> 
        <button className='ml-16 border-3 rounded px-6 py-1 text-4xl font-bold'>+</button>
      </form>
    </div>
      
    </>
    
  )
}

export default Create