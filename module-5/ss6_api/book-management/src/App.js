import './App.css';
import BookList from "./components/BookList";
import {Route, Routes} from "react-router-dom";
import BookCreate from "./components/BookCreate";
import BookEdit from "./components/BookEdit";

function App() {
  return (
   <>
       <Routes>
           <Route path={'/'} element={<BookList/>} />
           <Route path={'/create'} element={<BookCreate/>} />
           <Route path={'/update/:id'} element={<BookEdit/>} />
       </Routes>
       
   </>
  );
}

export default App;
