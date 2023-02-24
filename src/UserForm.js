import { useState } from "react";

export default function UserForm({handleSubmit}) {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    function submitForm(e) {
        e.preventDefault();
        handleSubmit(userName, userEmail);
    }

    return <form onSubmit={submitForm}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={userName}
            onChange={e => setUserName(e.target.value)}>
        </input>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" value={userEmail}
            onChange={e => setUserEmail(e.target.value)}>
        </input>
        <br />
        <button type="submit">Update</button>
    </form>;
}