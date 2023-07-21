import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToPostsPage = (user) => {
    navigate("posts/" + user.id, { state: user });
  };

  return (
    <>
      <button type="button" className="back-btn" onClick={redirectToHome}>
        Go back
      </button>
      <table className="details">
        <tbody>
          <tr>
            <th>Username:</th>
            <td>{state.username}</td>
          </tr>
          <tr>
            <th>email address:</th>
            <td>{state.email}</td>
          </tr>
          <tr>
            <th>City:</th>
            <td> {state.address.city}</td>
          </tr>
          <tr>
            <th>Company:</th>
            <td> {state.company.name}</td>
          </tr>
          <tr>
            <th>CCompany Website:</th>
            <td> {state.website}</td>
          </tr>
          <tr>
            <th>Street Address:</th>
            <td>
              {state.address.street}, {state.address.suite},{" "}
              {state.address.city}
            </td>
          </tr>
        </tbody>
      </table>
      <button type="" onClick={() => redirectToPostsPage(state)} className="btn btn-red">See Posts</button>
    </>
  );
};

export default Details;
