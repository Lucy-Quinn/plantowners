import Link from 'next/link';
import styles from '../../styles/Plants.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { owners: data }
    }
}

const Plants = ({ owners }) => {
    return (
        <div>
            <h1>All plant owners</h1>
            {owners.map(owner => (
                <Link href={`/plants/${owner.id}`} key={owner.id}>
                    <a className={styles.single}>
                        <h3>{owner.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Plants;