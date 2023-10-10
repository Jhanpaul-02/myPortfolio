import Navbar from "./components/NavBar/navbar";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
