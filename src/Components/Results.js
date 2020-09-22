import React from "react";
import ListItem from "./ListItem";

export default function Results({ dataUser, dataRepo }) {
  if (
    !dataUser ||
    dataUser.message ||
    dataRepo.message ||
    dataUser.length === 0
  ) {
    return "No results!";
  }

  const { id, avatar_url, name, location, bio } = dataUser;

  return (
    <ul>
      <ListItem
        key={id}
        photo={avatar_url}
        name={name}
        location={location}
        bio={bio}
        repos_name={dataRepo.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
      />
    </ul>
  );
}
