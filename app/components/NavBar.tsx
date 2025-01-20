import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
      <div className='flex flex-row bg-slate-200 p-5'>
          <Link className="mr-5" href='/'>Next.js</Link>
          <Link className="mr-5" href='/users'>User</Link>
    </div>
  )
}

export default NavBar