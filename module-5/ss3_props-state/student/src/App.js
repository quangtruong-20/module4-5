
import './App.css';
const studentList = [
  {
    id: '1',
    name: 'Maria Anders',
    age: '18',
    address: 'Germany',
  },
  {
    id: '2',
    name: 'Seo',
    age: '19',
    address: 'Germany',
  },
]

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
        <tbody>
          {studentList.map(item => (
        <tr  key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
        </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
