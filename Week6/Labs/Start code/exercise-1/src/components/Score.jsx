import Statistic from "./Statistic";

function Score({ courseName, courseResult }) {
  return (
    <>
      <div className="scores">
        <h1>{courseName}</h1>

        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {courseResult.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td className={student.score < 50 ? "warning" : ""}>
                    {student.score}
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
        <Statistic courseResult={courseResult}></Statistic>
      </div>
    </>
  );
}
export default Score;
