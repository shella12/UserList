import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const {state} = useLocation();
  const navigate = useNavigate();


  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <p>{state.username}</p>
      <p>{state.email}</p>
      <p>{state.address.city}</p>
      <button
        type="button"
        className="back-btn"
        onClick={redirectToHome}>
        back
      </button>
    </>
  );
};

export default Details;
