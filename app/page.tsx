import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Fira_Code } from "@next/font/google";

const fira = Fira_Code({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16 flex flex-row justify-between">
        <Sidebar />
        <div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
          <div className="text-5xl font-bold">Hello World!</div>
        </div>
      </div>
    </main>
  );
}
