import './App.css';
import {Route, Routes} from "react-router-dom";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BookUpdate from "./components/BookUpdate";


function App() {
  return (
   <>

    <Routes>
        <Route path={'/'} element={<BookList/>}/>
        <Route path={'/create'} element={<BookCreate/>}/>
        <Route path={'/edit/:id'} element={<BookUpdate/>}/>
    </Routes>

   </>
  );
}

export default App;
