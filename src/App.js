// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import selfImage from './images/self-image.png';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import RecentWork from "./components/RecentWork";
import Contact from "./components/Contact";



function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <RecentWork />
      <About />

      <Contact />
    </div>
  )
}

export default App;
