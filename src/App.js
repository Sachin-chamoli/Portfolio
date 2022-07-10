import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Introo from './components/Introduction/Introo';
import ProjectsList from './components/ProjectsList/ProjectsList';


function App() {
  return (
    <div >
      <Introo/>
      <About/>
      <ProjectsList/>
      <Contact/>
    </div>
  );
}

export default App;
