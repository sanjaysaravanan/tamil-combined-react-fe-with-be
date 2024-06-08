import { useState } from "react";
import { getAllTeachers } from "../../apis/teachers";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import TeacherList from "./TeacherList";
import { Link } from "react-router-dom";

function App() {
  const [teachers, setTeachers] = useState([]);

  const token = localStorage.getItem("token");

  const userDetails = jwtDecode(token);

  console.log("User details", userDetails);

  const isAuthorized = userDetails.role === "Teacher";

  const loadData = async () => {
    setTeachers(await getAllTeachers());
  };

  useEffect(() => {
    if (isAuthorized) {
      loadData();
    }
  }, []);

  const renderCheck = () => {
    if (isAuthorized) {
      return <TeacherList teachers={teachers} />;
    } else {
      return <h1>Your Not Authorised</h1>;
    }
  };

  return (
    <>
      <Link to="/">Home</Link>
      {renderCheck()}
    </>
  );
}

export default App;
