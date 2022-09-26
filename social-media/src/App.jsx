import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={<Login />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App