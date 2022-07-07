import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Secret from "./pages/protected/Secret";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./redux/slice/authSlice";
import ProtectedRoute from "./utils/ProtectedRoute";
import Ps from "./pages/protected/Ps";






function App() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useSelector((state) => state.auth.value);
  console.log("user from state", user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
         
          <li>
            <Link to="/protected">hOME </Link>
          </li>
          <li>
            <Link to="/protected12">hOME2 </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    console.log("user signed out");
                  })
                  .catch((error) => {
                    console.log("error", error);
                  });
              }}
            >
              Log out
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>


        <ProtectedRoute exact path="/protected" component={Secret} />
        <ProtectedRoute exact path="/protected12" component={Ps} />

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </Router>

);
}

export default App;
