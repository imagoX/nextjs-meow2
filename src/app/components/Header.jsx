import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link className={'bg-green-700'}>conduit</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/signin">Sign in</Link>
                    </li>
                    <li>
                        <Link href="/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;