// eslint-disable-next-line react/prop-types
const TeacherList = ({ teachers = [] }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Teacher List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Course</th>
            <th>Batch</th>
            <th>Name</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.course}</td>
              <td>{teacher.batch}</td>
              <td>{teacher.name}</td>
              <td>{teacher.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
