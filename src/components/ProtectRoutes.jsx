import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export const ProtectRoutes = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  return children;
};
