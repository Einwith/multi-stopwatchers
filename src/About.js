import gm from './Gmaillogo.svg';
import lin from './linkedinlogo.svg';
import git from './githublogo.svg';


const About = () => {
    return ( 
        <div className="about">
            <div>
                <h2>About</h2>
                <p>This application is created for running multiple stopwatches.</p>
                <p>Hope you enjoy the service!</p>
                <div className="contact">Contact me at:<br></br>
                <img src={gm} width="20" height="20"/> <a href="tongtong.zhang12@gmail.com" target="_blank">Email</a><br></br>
                <img src={lin} width="20" height="20"/> <a href="https://www.linkedin.com/in/tongtong-z-b61b54211/" target="_blank">Linkedin</a><br></br>
                <img src={git} width="20" height="20"/> <a  href="https://github.com/Einwith" target="_blank">Github</a>

                    <p>&#169;2021</p>
                    <p>More features to come upon inqury!</p>                
                </div>
            </div>
            <div></div>

        </div>
     );
}
 
export default About;