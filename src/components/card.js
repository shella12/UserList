const Card = (props) => {
    const { user, redirectToDetailsPage } = props;
    return (
      <div className="user" onClick={() => redirectToDetailsPage(user)}>
        <h1>{user.name}</h1>
      </div>
    );
  };

  export default Card;
  