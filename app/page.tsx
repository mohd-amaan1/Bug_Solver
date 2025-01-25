import { getServerSession } from "next-auth";
import ProductCard from "./components/ProductCard";
export default async function Home() {
  const session = await getServerSession();
  return (
    <main>
      <h1>Hello, {session && <span> {session.user!.name} </span>}</h1>
      <ProductCard />
    </main>
  );
}
