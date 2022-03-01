import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector
  // user from redux store import

  return (

        <Router>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/timeline' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
   
  );
}

export default App;
