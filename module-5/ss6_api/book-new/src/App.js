import './App.css';
import BookList from "./components/BookList";
import {Route, Routes} from "react-router-dom";
import BookEdit from "./components/BookEdit";
import BookCreate from "./components/BookCreate";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<BookList/>}/>
        <Route path={'/book-edit/:id'} element={<BookEdit/>}/>
        <Route path={'/book-create'} element={<BookCreate/>}/>
      </Routes>

    </>
  );
}

export default App;
