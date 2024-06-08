import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Simple Home Page</h1>
      <Link to="/students">All Students</Link>
      &nbsp; &nbsp;
      <Link to="/teachers">All Teachers</Link>
    </>
  );
};

export default Home;
