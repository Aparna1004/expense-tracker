import Header from "@/Components/Header";
import Landing from "@/Components/Landing";

export default function Home() {

console.log(process.env.DATABASE_URL);

  return (
    <div>
      <Header/>
      <Landing/>
    </div>
  );
}
