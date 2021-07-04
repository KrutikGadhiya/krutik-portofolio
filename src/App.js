import './App.css';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div class="cursor"></div>
      <Hero />
      <Intro />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
