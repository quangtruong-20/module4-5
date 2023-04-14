import './App.css';
import {Route, Routes} from "react-router-dom";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";


function App() {
  return (
   <>

    <Routes>
        <Route path={'/'} element={<BookList/>}/>
        <Route path={'/create'} element={<BookCreate/>}/>
    </Routes>

   </>
  );
}

export default App;
