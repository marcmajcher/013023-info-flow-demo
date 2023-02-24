import './UserCard.css';

export default function UserCard({ user }) {

    return <div className="card">
        <h2>User: {user.name}</h2>
        <h3>Email: {user.email}</h3>
    </div>;

}