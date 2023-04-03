import './App.css';
import './home.css';
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.css"
import FacilityList from "./components/facility/FacilityList";


function App() {
  return (
    <div>
      {/*<Home/>*/}
        <FacilityList></FacilityList>
    </div>
  );
}

export default App;
