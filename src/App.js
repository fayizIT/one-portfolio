import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLink from "./Components/SocialLink";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Works from "./Components/Works";


//latest version of react
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <SocialLink/>
      
    </div> 
  );
}

export default App;
