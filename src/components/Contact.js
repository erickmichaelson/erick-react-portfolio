// import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(){
    return(
        <div id="contact-me" className="contact-info">
        <h2>Contact Info</h2>
        
        <ul>
            <li>email: <a className="contact-links" href="mailto: emich09@gmail.com">emich09@gmail.com</a> </li>
            <li>phone: 586-277-4699</li>
            <li><a href="./assets/images/Resume.pdf" download="erick-michaelson-resume-mar21" class="contact-links" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a className="contact-links" href="https://github.com/erickmichaelson">github</a></li>
            <li> <a className="contact-links" href="https://www.linkedin.com/in/erick-michaelson-b2622b201/">linkedin</a></li>
        </ul>
    </div>
    )
}


export default Contact