import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

export default function TodoList() {
  const { TodayTodos } = useContext(TodosContext);

  return (
    <div>
      {TodayTodos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

function Todo({ todo }) {
  const { dispatch } = useContext(TodosContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleCheckboxChange = () => {
    dispatch({ type: "TOGGLE_TODO", id: todo.id });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "UPDATE_TODO", id: todo.id, title });
      setIsExpanded(false); // Optionally close the expanded view after updating
    }
  };

  if (!isExpanded) {
    return (
      <div
        onDoubleClick={() => {
          setIsExpanded(true);
        }}
      >
        <input
          className="scale-125"
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
        <span className="ml-1 text-gray-600">{todo.title}</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-2">
      <div className="flex items-center py-2 border-b">
        <input
          className="scale-125"
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
        <input
          className="border-none focus:outline-none ml-2"
          placeholder="New To-Do"
          type="text"
          value={title}
          onChange={handleTitleChange}
          onKeyDown={handleTitleKeyDown}
          aria-autocomplete="list"
        />
      </div>
      <div className="flex items-center py-2 border-b">
        <input
          className="border-none focus:outline-none ml-2 text-sm"
          placeholder="Notes"
          type="text"
        />
      </div>
      <div className="flex items-center py-2 border-b">
        <input
          className="border-none focus:outline-none ml-2 text-sm"
          placeholder="New Sub Task"
          type="text"
        />
      </div>
      <div className="flex items-center py-2 border-b">
        <input
          className="border-none focus:outline-none ml-2 text-base"
          placeholder="Add Tags"
          type="text"
        />
      </div>
      <div className="flex items-center py-2 border-b">
        <input
          className="border-none focus:outline-none ml-2 text-sm placeholder:text-gray-300"
          placeholder="Set When"
          type="text"
        />
      </div>
      <div className="flex items-center py-2 border-b">
        <input
          className="border-none focus:outline-none ml-2"
          placeholder="Inbox"
          type="text"
        />
      </div>
      <div className="flex items-center py-2">
        <input
          className="border-none focus:outline-none ml-2 text-sm"
          placeholder="Add Deadline"
          type="text"
        />
      </div>
    </div>
  );
}
