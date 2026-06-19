import { useContext } from "react";
import { AuthContext } from "../context/Contexts";

export function useAuth() {
    return useContext(AuthContext);
}