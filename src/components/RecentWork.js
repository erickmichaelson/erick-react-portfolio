function RecentWork() {
    return (
        <div className="fullpage container" >
            <h2>Recent Work</h2>



            <div className="card-header">
                <h3>Group Mentality</h3>
            </div>
            <div className="container justify-content-center col-small recent-work-image">
                <a src="https://radiant-river-17780.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/images/group-mentality-ss.jpeg" alt="screenshot of group mentality homepage" />
                </a>
            </div>


            <div className="card-header">
                <h3>Brews and Loos</h3>
            </div>
            <div className="container justify-content-center col-small recent-work-image">
                <a src="https://erickmichaelson.github.io/brews-and-loos/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/images/mobile-ss-desc.png" alt="screenshot of Brews and Loos homepage" />
                </a>
            </div>


            <div>
                <h3>Custom Password Generator</h3>
            </div>
            <div className="container recent-work-image-2">
                <a src="https://erickmichaelson.github.io/custom-password-generator/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/images/password-generator.png" alt="screenshot of password generator" />
                </a>
            </div>
        </div>
    )
}

export default RecentWork;