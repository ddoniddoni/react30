import React from "react";

const User = ({ user, onRemove }) => {
  return (
    <div className="wrapper">
      <span className="usertext">{user.username}</span>
      <span className="useremail">({user.email})</span>
      <button onClick={() => onRemove(user.id)}>Delete</button>
    </div>
  );
};

export const UserList = ({ users, onRemove }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
};
