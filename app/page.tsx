import Image from "next/image";
import { Navbar } from "./components";
import { Landingpage } from "./components";
export default function Home() {
  return (
    <main className="app min-h-screen   ">
      <Navbar />
      <div>
      <Landingpage/>

      </div>
    </main>
  );
}
