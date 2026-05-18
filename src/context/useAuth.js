import { useContext } from "react";
import { AuthContext } from "./Contexts";

export function useAuth() {
    return useContext(AuthContext);
}