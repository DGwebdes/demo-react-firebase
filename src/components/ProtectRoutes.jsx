import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export const ProtectRoutes = ({ children }) => {
  const { user } = useAuth();
  console.log("Protected");

  if (!user) return <Navigate to="/login" replace />;
  return children;
};
