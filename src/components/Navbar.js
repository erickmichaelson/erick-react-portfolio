function Navbar(){
    return(
        <header className="container">
        <div className="flexbox">
          <h1>Erick Michaelson / MERN Stack Javascript Developer</h1>
        </div>
        <div className="flexbox">
          <nav className="nav-links justify-content-right">
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

    )
}

export default Navbar;
