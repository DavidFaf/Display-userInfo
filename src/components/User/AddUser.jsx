import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const initialUserInput = {
  username: "",
  age: "",
};

const AddUser = (props) => {
  const [error, setError] = useState();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name or age (non-empty values)",
      });
      return;
    }
    if (+userInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(userInput.username, userInput.age);
    console.log(userInput.username, userInput.age);
    setUserInput(initialUserInput);
  };

  const submitButtomHandler = () => {};

  const [userInput, setUserInput] = useState(initialUserInput);

  const inputHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username:</label>
          <input
            onChange={(event) => inputHandler("username", event.target.value)}
            type="text"
            id="username"
            name="username"
            value={userInput.username}
          />

          <label htmlFor="age">Age(Years):</label>
          <input
            onChange={(event) => inputHandler("age", event.target.value)}
            type="number"
            id="age"
            name="age"
            value={userInput.age}
          />

          <Button type="submit" text="Add user" onClick={submitButtomHandler} />
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
