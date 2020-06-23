import React from "react";

export const List = ({ todos }) => {
  const todoList = todos.map((todo, index) => <li>{todo}</li>);
  return (
    <>
      <ul>{todoList}</ul>
    </>
  );
};
export default List;
