import React, { useEffect } from "react";

const User = ({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log(user);
  });
  return (
    <div className="wrapper">
      <span
        className="usertext"
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </span>
      <span className="useremail">({user.email})</span>
      <button onClick={() => onRemove(user.id)}>Delete</button>
    </div>
  );
};

export const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};
