import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Blogs from './pages/Blogs/Blogs'
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/Shared/NotFound/NotFound'
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import UpdateInventory from './pages/UpdataInventory/UpdateInventory';
import ManageItems from './pages/ManageItems/ManageItems';
import AddItem from './pages/AddItem/AddItem';
import MyItem from './pages/MyItem/MyItem';
import { ToastContainer } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:_id' element={
          <RequireAuth>
            <UpdateInventory></UpdateInventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageItem' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
