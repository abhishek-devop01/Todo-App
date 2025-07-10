import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { todoContext } from "../Wrapper";

const Read = () => {
  const [todos, settodos] = useContext(todoContext)

  const deleteHandler = (id) => {
    const filtertodos = todos.filter((todo) => todo.id !== id);
    settodos(filtertodos);
    
    toast.error("Task deleted!");
  };

  const render = todos.map((todo) => (
    <div key={todo.id} className="flex items-center justify-center">
      <li className="bg-gray-200 pl-7 mb-8 font-mono text-2xl rounded-xl w-[61%] flex items-center justify-between">
        {todo.title}
        <span
          className="font-black cursor-pointer border-3 rounded px-7 py-2"
          onClick={() => deleteHandler(todo.id)}
        >
          X
        </span>
      </li>
    </div>
  ));

  return (
    <>
      <h1 className="text-4xl text-center mt-10 mb-5">Pending Works -</h1>
      <ol className="list-item mt-4">{render}</ol>
      <div>
        <h1 className="h-96"></h1>
      </div>
    </>
  );
};

export default Read;
