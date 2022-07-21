import { About } from "./components/about";
import { AllInOne } from "./components/allInOne";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { NavBar } from "./components/navbar";
import { Pricing } from "./components/pricing";
import { Support } from "./components/support";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
