import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import {NavLink, Route, Routes} from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
   <>
       {/*<NavLink to={'/'}>List</NavLink>*/}
       <Routes>
           <Route path={'/'} element={<List/>} />
           <Route path={'/create'} element={<Create/>} />
           <Route path={'/update/:id'} element={<Edit/>} />
       </Routes>
       
   </>
  );
}

export default App;
