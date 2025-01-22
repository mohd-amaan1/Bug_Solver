import Link from 'next/link';
import UserTable from './UserTable';
import { Suspense } from 'react';

interface Props {
    searchParams: {sortOrder: string};
}

const page = async ({searchParams: {sortOrder}}: Props) => {
    
  return (
    <div>
      <Link href = "/users/new" className='btn'>New user</Link>
      <h1>Users:</h1> 
        <Suspense fallback = {<span className="loading loading-dots loading-lg text-success"></span>}>
          <UserTable sortOrder={sortOrder} />
        </Suspense>
    </div>
  )
}

export default page;
