"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const newUser = () => {
    const router = useRouter();
  return (
    <button className='btn btn-primary' onClick={() => router.push("/users")}>Create new user</button>
  )
}

export default newUser;