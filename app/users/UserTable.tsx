import React from 'react'

interface User {
    id:number,
    name:string,
    email:string
}

const UserTable = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache:'no-cache'
    })

    const users: User[] = await res.json();

  return (
<table className='table table-bordered'>
    <thead>
        <tr>
            <td>Name</td>
            <td>Email</td>
        </tr>
    </thead>
    <tbody>
        {users.map((user) => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>)}
    </tbody>
</table>
    )
}

export default UserTable