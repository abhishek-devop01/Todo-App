import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { todoContext } from "../Wrapper";

const Create = () => {
  
  const [todos, settodos] = useContext(todoContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submithandler = (data) => {
    data.iscompleted = false;
    data.id = nanoid();

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    toast.success("Todo added successfully!");
    reset();
  };

  return (
    <>
      <div className="text-7xl font-bold">
        <h1>TODO </h1>
        <span className="font-mono font-thin pl-10">
          <span>-</span>
          LIST
        </span>
      </div>
      <hr />
      <div className="mt-8 text-center flex-col items-center justify-center">
        <form onSubmit={handleSubmit(submithandler)}>
          <input
            {...register("title", { required: "can't be empty" })}
            className="w-[50%] font-mono border-b-2 rounded p-2 text-3xl"
            placeholder="Enter Your Task..."
            type="text"
          />
          <small className="text-red-400 text-sm">
            {errors?.title?.message}
          </small>
          <button className="ml-16 border-3 rounded px-6 py-1 text-4xl font-bold">
            +
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
