import React, { useRef, useState } from "react";
import "./styles.css";
import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";

const Home = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "ddoni",
      email: "sangdonidoni@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "jh",
      email: "hj@example.com",
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} />
    </>
  );
};
export default Home;
