import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { Home } from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AddUser />} path="/addUser" />
        <Route path="/editUser">
          <Route element={<EditUser />} path=":id" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
