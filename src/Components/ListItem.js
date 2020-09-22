import React from "react";

export default function ListItem({ photo, name, location, bio, repos_name }) {
  return (
    <li>
      <img className="avatar" alt="User's avatar" src={photo} />
      <br />
      <h3>{name}</h3>
      <br />
      <span>Location: </span> {location}
      <br />
      <span>Bio: </span> {bio}
      <br />
      <span>Repositories: </span>
      <br />
      {repos_name}
    </li>
  );
}
