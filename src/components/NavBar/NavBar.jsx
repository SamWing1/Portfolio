import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    return (
        <nav>
            
                <Link class='link' to='/AboutMe'>About Me</Link>
                <Link class='link' to='/Projects'>Projects</Link>
                <Link class='link' to='/Contact'>Contact</Link>
                <Link class='link' to='/'>Home</Link>
        </nav>
    );
}