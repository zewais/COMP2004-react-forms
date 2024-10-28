import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

export default function TodoApp() {
  const [todoData, setTodoData] = useState({
    id: 0,
    task: "",
  });

  const [todoList, setTodoList] = useState([]);
  const handleTask = (evt) => {
    const fieldValue = evt.target.value;

    setTodoData((prevData) => {
      return {
        ...prevData,
        id: crypto.randomUUID(),
        task: fieldValue,
        checked: false,
      };
    });
  };

  const addToList = (item) => {
    setTodoList((prevList) => {
      return [...prevList, { id: crypto.randomUUID(), task: item.task }];
    });
  };
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    addToList(todoData);
    setTodoData({ id: "", task: "" });
  };

  const handleDeleteItem = (id) => {
    setTodoList((prevList) => {
      return prevList.filter((i) => i.id !== id);
    });
  };

  return (
    <div>
      <TodoForm
        addTask={handleTask}
        todoData={todoData}
        onSubmit={handleOnSubmit}
      />
      <TodoItems todoList={todoList} onClick={handleDeleteItem} />
    </div>
  );
}
