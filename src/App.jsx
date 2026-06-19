import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chatroom from "./pages/Chatroom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ProtectRoutes } from "./components/ProtectRoutes";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/chatroom" element={<Chatroom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
