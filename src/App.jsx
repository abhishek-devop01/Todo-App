import { React, useState } from "react";
import Read from "./components/Read";
import Create from "./components/Create";

const App = () => {

  const [todos, settodos] = useState([{
     id:" ", titile: " ", iscompleted: false
  }])


  return (
    <div className="px-14 py-2 h-screen w-full ">
      <Create todos={todos} settodos={settodos}/>
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
