import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import Card from "./components/UI/Card";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      { usersList && <UsersList users={usersList} />}
    </div> 
  );
}

export default App;
