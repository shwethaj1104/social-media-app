import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


const App = () => {
  return (
    // <Home />
    // <Profile />
    <BrowserRouter>
    <Routes>
      <Route path='/' >
        <Route index element={<Home />}></Route>
        <Route path='profile' element={<Profile />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App