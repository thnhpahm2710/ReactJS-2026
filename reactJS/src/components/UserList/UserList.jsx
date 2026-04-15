import { useState, useEffect } from 'react'

export default function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        //ham goi api
        fetch('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <ul>
            {users.map(user => <li>{user.name}</li>)}
        </ul>
    );
}