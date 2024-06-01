// src/StudentList.js

// eslint-disable-next-line react/prop-types
const StudentList = ({ students = [] }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Course</th>
            <th>Batch</th>
            <th>Name</th>
            <th>ID</th>
            <th>Teacher ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.course}</td>
              <td>{student.batch}</td>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.teacherId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
