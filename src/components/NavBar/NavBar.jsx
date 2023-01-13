import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to='/AboutMe'>About Me</Link>
            &nbsp; | &nbsp;
            <Link to='/Projects'>Projects</Link>
            &nbsp; | &nbsp;
            <Link to='/Contact'>Contact</Link>
            &nbsp; | &nbsp;
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
        </nav>
    );
}