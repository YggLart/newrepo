import { Career } from "./Components/Career";
import { Contact } from "./Components/Contact";
import { Education } from "./Components/Education";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Profile } from "./Components/Profile";
import { Project } from "./Components/Project";

function App() {
  return (
    <div className="bg-base-300 flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <Profile />
      <Education />
      <Career />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
