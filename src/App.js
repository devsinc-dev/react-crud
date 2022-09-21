import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import EditUser from './edit-user';
import './App.css';
import ListUser from './list-user';
import AddUser from './add-user';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <nav className="navigation">
        <NavLink to="/add-user">Add User</NavLink>
        <NavLink to="/user-list">User List</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/user-list" element={<ListUser />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
