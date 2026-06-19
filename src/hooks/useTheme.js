import { useContext } from 'react'
import { ThemeContext } from '../context/Contexts'

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within Theme Provider");
    }
    return context;
};