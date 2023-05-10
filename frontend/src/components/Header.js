import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link className='link' to='/'>
                    <div>HOME</div>
                </Link>
                <Link className='link' to='/about'>
                    <div>ABOUT</div>
                </Link>
                <Link className='link' to='/projects'>
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;