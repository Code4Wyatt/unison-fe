import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector
  // user from redux store import

  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/timeline' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
