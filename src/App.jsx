import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Elearning from "./components/Elearning";
import Minibout from "./components/Minibout";
// import mastercard from "./components/mastercard";


function App() {
  return (
    <main className="relative min-h-screen w-screen bg-gray-900 overflow-x-hidden">
      <NavBar />
      <Hero />
      <Minibout />
      <About />
      <Features />
      {/* <Story /> */}
      <Elearning />
      {/* <Contact /> */}
     
      <Footer />
      {/* <mastercard /> */}
      
      
    </main>
  );
}

export default App;
