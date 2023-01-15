import './App.css';
import Menu from './components/Menu';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Teste from './components/Teste';
import Footer from './components/Footer';
import Description from './components/Description';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Teste />
       <Menu />
      <AboutMe />
      <Description />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
