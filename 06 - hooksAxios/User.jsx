import React, { useState, useEffect, useReducer } from "react";
import "./styles.css";
import axios from "axios";
import { useAsync } from "./useAsync";

const getUser = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
};

export const User = ({ id }) => {
  const [state] = useAsync(() => getUser(id), [id]);
  const { loading, data: user, error } = state;

  if (loading) return <div className="loading">로딩중</div>;
  if (error) return <div className="error">에러가 발생</div>;
  if (!user) return null;
  return (
    <>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </>
  );
};
