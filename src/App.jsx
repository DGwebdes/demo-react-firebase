import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chatroom from "./pages/Chatroom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ProtectRoutes } from "./components/ProtectRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<Chatroom />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
