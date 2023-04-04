import './App.css';
import './home.css';
import "bootstrap/dist/css/bootstrap.css"

import CustomerList from "./components/customer/CustomerList";


function App() {
  return (
    <div>
      {/*<Home/>*/}
      {/*  <FacilityList></FacilityList>*/}
      {/*  <ContractList/>*/}
      {/*  <ContractCreate/>*/}
        <CustomerList/>
    </div>

  );
}

export default App;
