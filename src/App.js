import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLink from "./Components/SocialLink";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <SocialLink/>
    </div> 
  );
}

export default App;
