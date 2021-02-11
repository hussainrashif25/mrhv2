import './App.css';
import Terminal from './Components/terminal/terminal';
import About from './Components/about/about';
import Work from './Components/work/work';
import Project from './Components/projects/project';
import Contact from './Components/contact/contact';

function App() {
  return (
    <div className="App">
      
      <Terminal/>
      <About/>
      <Work/>
      <Project/>
      <Contact/>
      
    </div>
  );
}

export default App;
