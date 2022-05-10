import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Media from "./pages/Media";

function App() {

  return (
    <Router>
      <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/timeline' element={<Home />} />
              <Route path='/profile/:userId' element={<Profile />} />
              <Route path='/media' element={<Media />} />
              <Route path='/news' element={<Media />} />
      </Routes>
    </Router>
  );
}

export default App;
