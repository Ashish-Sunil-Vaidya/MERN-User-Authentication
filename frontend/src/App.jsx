import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import useAuth from "./hooks/useAuth";


function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/user/login" />}
        />
        <Route
          path="/user/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/user/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/user/resetpassword"
          element={!user ? <ResetPassword /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
