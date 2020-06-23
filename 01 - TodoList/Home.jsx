import React, { useEffect, useState } from "react";
import List from "./List";

import "./List.css";

const Home = () => {
  const [todos, setTodos] = useState(["js공부"]);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos]);

  return (
    <>
      <h1>Todo App</h1>

      <form action="">
        <input className="input" type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos} />
    </>
  );
};

export default Home;
