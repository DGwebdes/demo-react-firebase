import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectRoutes = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  return children;
};
