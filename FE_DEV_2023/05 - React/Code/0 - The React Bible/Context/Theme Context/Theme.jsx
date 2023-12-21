import { useState, createContext } from "react"
import FunctionalContextComponent from "./FunctionalContextComponent";

export const ThemeContext = createContext();

// Provider
export default function Theme() {
    const [darkTheme, setDarkTheme] = useState(true);

    // prevDarkTheme is the previous state of the darkTheme state variable.
    // The function inside setDarkTheme is an updater function that takes the previous state(prevDarkTheme) and returns the new state, which is the negation(!) of the previous state.
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    // Alternative without an arrow function
    // function toggleTheme() {
    //     setDarkTheme(!darkTheme);
    // }

    // In this version, we don't need to use a callback function because React guarantees that state updates are synchronous when using the functional form of setState. Therefore, we can directly use the current state value (darkTheme) without relying on the previous state. This approach is fine when the new state does not depend on the previous state, as is the case here.

    return (
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <FunctionalContextComponent />
        </ThemeContext.Provider>
    )
}