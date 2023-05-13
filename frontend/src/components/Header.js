import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <div>
                    <Link className='header-name' to='/'>ALLISON WOLTER</Link>
                </div>
                <div>
                    <Link className='link' to='/about'>ABOUT</Link>
                    <Link className='link' to='/projects'>PROJECTS</Link>
                    <Link className='link' to='/contact'>CONTACT</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;