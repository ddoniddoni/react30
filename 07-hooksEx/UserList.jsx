import React from "react";

const User = ({ user, onRemove, onToggle }) => {
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
