export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(owner => {
        return {
            params: { id: owner.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { owner: data }
    }
}

const Details = ({ owner }) => {
    return (
        <div>
            <h1>{owner.name}</h1>
            <p>{owner.email}</p>
            <p>{owner.website}</p>
            <p>{owner.address.city}</p>
        </div>
    );
}

export default Details;
