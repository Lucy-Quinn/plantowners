import Link from 'next/link';
import styles from '../../styles/Plants.module.css';

//in normal react apps => use hook like useEffect, which will make request in the browser.
//here we do not want to do this as all our components are pre-rendered before they reach the browser

//getStaticProps function => async function
//this function runs before the component is rendered, fetches the data, waits for the data. Once it has it, pumps it into the component, so it can be rendered with that data inside it.
export const getStaticProps = async () => {
    //use await for an async function
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); //returns a response object
    const data = await res.json(); //use json to get the data from the object

    return {
        props: { plants: data }
    }
}
//this function never runs in the browser only at build time so do not write code here that you expect to run in the browser


const Plants = ({ plants }) => {
    return (
        <div>
            <h1>All plants</h1>
            {plants.map(plant => (
                <Link href={`/plants/${plant.id}`} key={plant.id}>
                    <a className={styles.single}>
                        <h3>{plant.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Plants;


//job of Next is to build static pages and json bundles based on our components.
//reason for getstaticpaths funct. is to first tell Next how many HTML pages needs to be made based on our data
//Next runs the funct. sees how many HTML pages to create based on the array of objs ('path') that is returned
//for each of those it will run the getStaticProps function and will fetch each item that we need
//then this is put in the component so can generate a template for each of these pages.  

