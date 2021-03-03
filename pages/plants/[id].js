// naming the file with [] tells next that it is a route parameter and it is going to be changeable

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(plant => {
        return {
            params: { id: plant.id.toString() }
        }
    })

    return {
        paths,
        fallback: false //fallback pages???
        //set to false => so if a user tries to visit a route with an id that doesn't exist it will show the 404 page
    }

    //when Next builds our app for production. It will look at the array of objects (the array => paths that is returned) and it will build a page and a route for each one, using the params that we specified => the id!
    //it will then use the below Details component for each of those pages to make the component.
}
//is an async function => because have to fetch all of the data in this function so that we can get all of the ids and we can return those ids to Next. and then based on those can generate routes and pages for us. need that external data so Next knows how many pages and routes to generate. 


//need to fetch each individual plant and pass it as props into the component Details. 
//Next runs the below function for every single plant page that it generates and it bases it on the 'paths' array of objects (line 14). So if it returns 10 objects with 10 diff. ids, it will run the below function 10 times. so can make 10 diff. fetch requests for 10 diff. items.

// get access to the params that we need for each time around through a 'context' obj. that we automatically accept as an argument in this function.
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { plant: data }
    }
}

const Details = ({ plant }) => {
    return (
        <div>
            <h1>{plant.name}</h1>
            <p>{plant.email}</p>
            <p>{plant.website}</p>
            <p>{plant.address.city}</p>
        </div>
    );
}

export default Details;
