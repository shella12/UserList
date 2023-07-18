import { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(() =>{
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
        .catch(err=> console.log(err));
    },[]);
return(
    <>
    <Cards users={users}/>
    </>
);
}

export default Home;