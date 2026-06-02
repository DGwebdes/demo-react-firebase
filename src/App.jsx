import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from "./pages/Posts";
// import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;
