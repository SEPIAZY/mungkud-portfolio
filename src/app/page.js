import Hero from "./components/Hero.jsx";
import Project from "./components/Project.jsx";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <Hero />
      {/* <Project /> */}
    </div>
  );
}
