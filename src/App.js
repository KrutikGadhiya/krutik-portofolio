import './App.css';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div class="cursor"></div>
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
