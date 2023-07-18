import { useNavigate } from "react-router-dom";
import Card from "./card";

const Cards = (props) => {
  const navigate = useNavigate();
  const { users } = props;
  const redirectToDetailsPage = (user) => {
    navigate("details/" + user.id, {state: user});
  };
  return (
    <div className="user-list">
      {users &&
        users.map((user) => (
          <Card key={`${user.email}${user.id}`} className="card" user={user} redirectToDetailsPage={redirectToDetailsPage}/>
        ))}
    </div>
  );
};

export default Cards;
