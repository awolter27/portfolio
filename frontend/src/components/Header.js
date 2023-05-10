import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link className='link' to='/'>HOME</Link>
                <Link className='link' to='/about'>ABOUT</Link>
                <Link className='link' to='/projects'>PROJECTS</Link>
            </nav>
        </header>
    );
}

export default Header;