// import logo from './logo.svg';
import './App.css';
import selfImage from './images/self-image.png';


function App() {
  return (
    <div>
      
      <header className="container">
        <div className="flexbox">
          <h1>Erick Michaelson / MERN Stack Javascript Developer</h1>
        </div>
        <div className="flexbox">
          <nav className="justify-content-right">
            <ul>
              <li>
                <a href="#about-me" className="col-small">About</a>
              </li>
              <li>
                <a href="#recent-work" className="col-small">Recent Work</a>
              </li>
              <li>
                <a href="#contact-me" className="col-small">Contact Info</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">
        <div className="self-image flexbox">
          <img src={selfImage} alt="Erick Michaelson, the portfolio holder, a person with short dark hair and big glasses person."/>
        </div>
        <div className="flexbox column">
          <h2>Welcome to my Portfolio!</h2>
        </div>
        <br />
        <div className="container">
          <div className="justify-content-right">
            <h2>Recent Work</h2>
          </div>
          <br />
        </div>
      </main>
    </div>
  );
}

export default App;
