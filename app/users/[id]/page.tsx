import { notFound } from 'next/navigation'
interface Props {
    params: {id: number}
}
const userDetail = ({ params: { id } }: Props) => {
    if (id > 10) notFound();
    return (
      <div>userDetail {id}</div>
  )
}

export default userDetail