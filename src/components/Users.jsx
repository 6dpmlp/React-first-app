import React from "react";
import styles from "./Users.module.css";

function Users({ list }) {
  return (
    <ul className={styles.list}>
      {list.map((user) => {
        return (
          <li key={user.id} >
            {user.name} is {user.age} years old.
          </li>
        );
      })}
    </ul>
  );
}

export default Users;
