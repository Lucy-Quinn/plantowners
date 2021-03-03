import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" alt="plant logo" width={100} height={90} />
                <h1>Plant List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/plants"><a>Plant Listing</a></Link>
        </nav>
    );
}

export default Navbar;

//The links are working and all done in the browser