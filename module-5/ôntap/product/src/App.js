import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductUpdate from "./components/productUpdate";
import ProductCreate from "./components/ProductCreate";

function App() {
  return (
   <>
      <Routes>
        <Route path={'/'} element={<ProductList/>}/>
        <Route path={'/create'} element={<ProductCreate/>}/>
        <Route path={'/edit/:id'} element={<ProductUpdate/>}/>
      </Routes>

   </>
  );
}

export default App;
