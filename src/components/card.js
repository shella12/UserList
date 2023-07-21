import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";

const Card = (props) => {
  const { user, redirectToDetailsPage} = props;
  const srcP = () => {
    if (user.id % 4 === 0) return profile4;
    else if (user.id % 2 === 0) return profile2;
    else if (user.id % 3 === 0) return profile3;
    else return profile1;
  };

  return (
    <li className="user-card" onClick={() => redirectToDetailsPage(user)}>
      <img src={srcP()} alt="profile" />
      <h1>{user.name}</h1>
      <p>{user.company.catchPhrase}</p>
    </li>
  );
};

export default Card;
