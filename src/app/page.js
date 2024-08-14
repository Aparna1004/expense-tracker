import Header from "@/Components/Header";
import Landing from "@/Components/Landing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Landing />
      </main>
    </div>
  );
}
