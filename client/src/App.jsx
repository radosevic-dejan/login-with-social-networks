import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Post } from "./pages/post";

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      }).then(res => {
        if(res.status === 200) return res.json();
        throw new Error("Failed to authenticate user.");
      }).then(resObj => {
        setUser(resObj.user);
      }).catch(err => console.log(err))
    }
    getUser();
  }, []);

  return (
    <Fragment>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:postId" element={user ? <Post /> : <Navigate to="/login" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
