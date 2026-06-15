import { createContext } from "react";

export const ThemeContext = createContext(undefined);
export const AuthContext = createContext({
    user: null,
    profile: null,
    loading: true,
    logout: () => {},
    GoogleSignIn: () => {},
});