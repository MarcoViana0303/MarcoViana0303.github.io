import './App.css';
import Menu from './components/Menu';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Description from './components/Description';
import Contact from './components/Contact';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
       <Menu />
      <AboutMe />
      <Description />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
