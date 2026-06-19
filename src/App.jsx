import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chatroom from "./pages/Chatroom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useAuth } from "./hooks/useAuth";
import { LoadingScreen } from "./components/LoadingScreen";

function AppContent() {
  const { loading } = useAuth();

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
