import React, { useState } from "react";
import Button from "./Button";
import styles from "./Card.module.css";

function Card(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const saveName = ({ target }) => {
    setUserName(target.value);
  };

  const saveAge = ({ target }) => {
    setUserAge(target.value);
  };

  const saveData = () => {
    if (userName === "" || userAge === "") {
      const errorMessage = {
        warning: "Missing input!",
        errorText: "Both fields must be filled in!",
      };
      props.onGetError(errorMessage);
      setUserName("");
      setUserAge("");
      return;
    }
    if (+userAge < 0) {
      const errorMessage = {
        warning: "Invalid input!",
        errorText: "Age cannot be a negative number!",
      };
      props.onGetError(errorMessage);
      setUserName("");
      setUserAge("");
      return;
    }
    props.onGetUsers(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  return (
    <div className={styles.card}>
      <div>
        <label >Username</label>
      </div>
      <div>
        <input onChange={saveName} type="text" value={userName} />
      </div>
      <div>
        <label>Age (years)</label>
      </div>
      <div>
        <input onChange={saveAge} type="number" value={userAge} />
      </div>
      <div>
      <Button className={styles.button} onClick={saveData}>Add User</Button>
      </div>
    </div>
  );
}

export default Card;