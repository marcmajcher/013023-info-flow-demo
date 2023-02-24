import { useState } from 'react';
import './App.css';
import UserCard from './UserCard';
import UserForm from './UserForm';

const userInfo = { id: 1, name: "Marc", email: "marc@flatiron.com" };

function App() {
  const [user, setUser] = useState(userInfo);

  function updateUser(name, email) {
    setUser({
      id: user.id,
      name,
      email
    });
  }

  function holler() {
    alert("WRONG FORM DUMMY!")
  }

  return (
    <div className="container">
      <h1>Info </h1>
      <UserCard user={user} />
      <UserForm handleSubmit={updateUser} />
      <UserForm handleSubmit={holler} />
    </div>
  );
}

export default App;
