import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetail from "./components/PostDetail";
import CreatePost from "./components/CreatePost";
// import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route
          path="posts/post/:id"
          element={<PostDetail posts={posts} setPosts={setPosts} />}
        />
        <Route path="/create" element={<CreatePost setPosts={setPosts} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;
