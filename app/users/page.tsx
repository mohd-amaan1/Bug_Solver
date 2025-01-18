import React from 'react'

interface User {
    id: number,
    name: string
}

const page = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store"
    });
    const users: User[] = await response.json();
  return (
      <div>Users: 
          <ul>
              {users.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
    </div>
  )
}

export default page;