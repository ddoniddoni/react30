import React from "react";

export const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <div className="wrapper">
        <input
          className="username"
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
        <input
          className="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>등록</button>
      </div>
    </div>
  );
};
