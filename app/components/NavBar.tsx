"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
      <div className='flex flex-row bg-slate-200 p-5 space-x-3'>
          <Link className="mr-5" href='/'>Next.js</Link>
      <Link className="mr-5" href='/users'>User</Link>
      {status === 'authenticated' && <div>{session.user!.name}</div>}
      {status === 'unauthenticated' && <Link className="mr-5" href='/api/auth/signin'>LogIn</Link>}
      {status === 'authenticated' && <Link href='/api/auth/signout'>Log Out</Link>}
    </div>
  )
}

export default NavBar