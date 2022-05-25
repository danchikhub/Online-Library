import './App.css';
import { useSelector, useDispatch } from "react-redux";
import * as actions from './store/actions/books'
import bookService from './service/book-service';
import { useEffect } from 'react';
import Header from './components/headers/Header';
import Home from './page/Home';
import Crud from './page/Crud';
import WishList from './page/WishList';
import { Routes, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      bookService.getAll().then(resolve => dispatch(actions.fetchBooks(resolve)))
  },[])
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/crud" element={<Crud/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
