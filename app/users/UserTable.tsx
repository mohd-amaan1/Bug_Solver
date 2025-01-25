import React from 'react'
import { sort } from 'fast-sort'
import Link from 'next/link';

interface User {
    id: number,
    name: string,
    email: string
}
// In profile
// referral
// GSC
// Resume
// certificate
// Nextjs
// scholarship
// Saara faida humse
// Aur hume kya mila: GAD
// Relatioship: Not profitable, No sense, Only loss of mind and focus

interface Props {
    sortOrder: string;
}

const UserTable = async ({sortOrder}: Props) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store"
    });
    const users: User[] = await response.json();
    const sortedUser = sort(users).asc(sortOrder === "email" ? users => users.email : users => users.name);
  return (
    <table className='table table-bordered'>
              <thead>
                  <tr>
                      <th><Link href = '/users?sortOrder=name'>Name</Link></th>
                      <th><Link href = '/users?sortOrder=email'>Email</Link></th>
                  </tr>
              </thead>
              <tbody>
                  {sortedUser.map(user => <tr key={user.id}><td>{user.name}</td>
                      <td>{user.email}</td></tr>)}
              </tbody>
          </table>
  )
}

export default UserTable


// Aapse koi lena dena nahi hai
// Lekin phir bhi aap door raho, bcoz of GAD