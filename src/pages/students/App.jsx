import { useState } from "react";
import { getAllStus } from "../../apis/students";
import { useEffect } from "react";
import StudentList from "./StudentList";
import { Link } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([]);

  const loadData = async () => {
    const data = await getAllStus();

    setStudents(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Link to="/">Home</Link>
      <StudentList students={students} />
    </>
  );
}

export default App;
