
import './App.css';
import StudentInfor from "./components/StudentInfor";


function App() {
  return (
    <>
      <table >
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        </thead>
        <tbody >
        <StudentInfor/>
        </tbody>
      </table>
    </>
  );
}

export default App;
