import React, { useState, useEffect, useReducer } from "react";
import "./styles.css";
import axios from "axios";
import { useAsync } from "./useAsync";

const getUsers = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

export const User = () => {
  const [state, refetch] = useAsync(getUsers, []);

  const { loading, data: users, error } = state;

  if (loading) return <div className="loading">로딩중</div>;
  if (error) return <div className="error">에러가 발생</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </>
  );
};
