import "./App.css";
import IntroductionSection from "./components/IntroductionSection";
import Navbar2 from "./components/layout/Navbar2";
import Shop from "./components/Shop";
import Brand from "./components/Brand";
import Instruction from "./components/Instruction";
import Reviews from "./components/Reviews";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <IntroductionSection />
      <Shop />
      <Brand />
      <Instruction />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
