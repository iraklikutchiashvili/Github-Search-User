import React from "react";

function User(props) {
  return (
    <div className="user">
      <img src={props.avatar} alt="Avatar" width="50" height="50" />
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.username}
      </a>
    </div>
  );
}

export default User;
