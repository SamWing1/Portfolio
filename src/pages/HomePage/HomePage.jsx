import { useLocation } from 'react-router-dom';
import headshot from '../../Images/headshot.jpg';
import './HomePage.css';

const otherPage = ["/AboutMe", "/Projects", "/Contact"];

export default function HomePage() {
const {pathname} = useLocation();

if (otherPage.some((item) => pathname.includes(item))) return null;

    return(
        <>
            <h1 className='name'>Sam Wing</h1>
            <div className='homepage'>
                <table>
                    <tr>
                        <td className='hometext'>
                        <h2 className='title'>Full Stack Developer</h2>
                        <p class='brief'>I bring a flexible skillset and comprehensive understanding <br /> of front end and back end development to each team and <br /> project I'm a part of!</p></td>
                        <td className='homeimg'><img src={headshot}></img></td>
                    </tr>
                </table>
            </div>
        </>
    )
}