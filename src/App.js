import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Blogs from './pages/Blogs/Blogs'
import Header from './pages/Shared/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
