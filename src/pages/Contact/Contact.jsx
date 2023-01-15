import { ContactUs } from '../ContactUs/ContactUs';
import cellphone from '../../Images/cellphonealt.png';
import github from '../../Images/githubalt.png';
import linkedin from '../../Images/linkedinalt.png';
import resume from '../../Images/resume.png';
import headshot from '../../Images/contactpic.png';
import './Contact.css';

export default function Contact() {
    return(
        <>
            <h1 id='reachme'>Where to Reach Me!</h1>
            <div class='card'>
                <img class='pic' src={headshot}/>
                <div class='cardtext'>Sam Wing <br /> geckoromanwing@hotmail.com <br /> Santa Barbara, CA</div>
                <a href='https://docs.google.com/document/d/10-dfrRsxo8AhhJfeyRZWXgxZnhnSDawJN1PRaWR0qJU/edit?usp=sharing' target='_blank' rel='noreferrer noopener'><img class='resume' src={resume}/></a>
                <p class='restxt'>resume</p>
            </div>
            <div class='container'>
                <div class='subcontainer'>
                    <div class='phonestub'>
                        <img class='phoneimg' src={cellphone}/>
                        <p class='stubtext'>Call or Text at <br />805-886-1708</p>
                    </div>
                    <div class='linkstub'>
                        <a href='https://www.linkedin.com/in/sam-wing-5b132324a/' target='_blank' rel='noreferrer noopener'>
                            <img class='linkedimg' src={linkedin} />
                        </a>
                        <p class='stubtext'>Check out my LinkedIn</p>
                    </div>
                    <div class='gitstub'>
                        <a href='https://github.com/SamWing1' target='_blank' rel='noreferrer noopener'><img class='gitimg' src={github}/></a>
                        <p class='stubtext'>Github</p>
                        
                    </div>
                </div>
                <ContactUs />
            </div>
        </>
    )
}