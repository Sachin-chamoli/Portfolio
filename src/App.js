import { useContext, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Introo from './components/Introduction/Introo';
import ProjectsList from './components/ProjectsList/ProjectsList';
import Toggle from './components/toogle/Toggle';
import { ThemeContext } from './context';


function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222": "white", color: darkMode && "white"}}>
      <Toggle/>
      <Introo/>
      <About/>
      <ProjectsList />
      <Contact/>
    </div>
  );
}

export default App;
