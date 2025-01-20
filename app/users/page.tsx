import UserTable from './UserTable';

interface Props {
    searchParams: {sortOrder: string};
}

const page = async ({searchParams: {sortOrder}}: Props) => {
    
  return (
      <div><h1>Users:</h1> 
          <UserTable sortOrder={ sortOrder} />
    </div>
  )
}

export default page;
