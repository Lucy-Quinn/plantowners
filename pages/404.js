import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) OR router.go(1)
            // negative no. takes the user back a page/ positive no. takes the user forward a page
            router.push('/');
        }, 3000);
    }, []);

    return (
        <div className="not-found">
            <h1>Upps...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;