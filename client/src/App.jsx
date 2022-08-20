import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Post } from "./pages/post";

function App() {
  const user = true;

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:postId" element={user ? <Post /> : <Navigate to="/login" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
