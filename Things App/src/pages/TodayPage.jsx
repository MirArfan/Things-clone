import { useContext } from "react";
import Layout from "../components/Layout";
import Todo from "../components/Todo";
import TodoList from "../components/TodoList";
import { TodosContext } from "../context/TodosContext";
import IconToday from "../components/icons/IconToday";

export default function TodayPage() {
  const { dispatch, uniqueTags } = useContext(TodosContext);
  // console.log(uniqueTags);

  return (<Layout>
    <h1 className="flex text-2xl 
     text-gray-600
     font-semibold items-center space-x-2 mb-4" >
      <IconToday />
      <span>Today</span>
    </h1>

     <div className="flex mb-6">
      <button className="text-gray-400 bg-gray-200 text-sm border  border-white hover:border-gray-300 rounded-xl px-4">All</button>
      {uniqueTags.map((tag, i)=>{
        return <button key={i}
        className="text-gray-400 text-sm border border-white hover:border-gray-300  rounded-xl px-4"
        >{tag} </button>
      })}
            <button className="text-gray-400 text-sm border border-white hover:border-gray-300  rounded-xl px-4">No tags</button>

     </div>
       
    <TodoList />
    <button onClick={() => {
      dispatch({ type: "ADD_TODO", title: "" })
    }}

      className="fixed text-2xl text-white bottom-6 right-6 w-12 h-12 bg-sky-500 shadow-md rounded-full flex justify-center items-center cursor-pointer">
      +
    </button>

  </Layout>
  )
}