import React, { useRef, useState } from "react";
import "./styles.css";
import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";

const countActiveUsers = (users) => {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
};

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
      active: true,
    },
    {
      id: 2,
      username: "okman",
      email: "Okman@example.com",
      active: false,
    },
    {
      id: 3,
      username: "jh",
      email: "hj@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4); // id값이 1,2,3 이미 설정 4부터 시작

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };

    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    }); // 계정 등록후 빈값으로 다시 설정
    nextId.current += 1; //ID값 올리기
  };

  const onRemove = (id) => {
    //user.id가 파라미터로 일치하지 않는 원소만 추출
    // = user.id가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const count = countActiveUsers(users);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
};
export default Home;
