import Cards from "../components/Cards";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  
  const fetchUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  };

  const users = useQuery(["Users"], fetchUsers);
 
  if (users.isLoading) return <h1>Loading...</h1>;
  if (users.isError) return <pre>{JSON.stringify(users.error)}</pre>;
  return (
    <>
      <Cards users={users.data} />
    </>
  );
};

export default Home;
