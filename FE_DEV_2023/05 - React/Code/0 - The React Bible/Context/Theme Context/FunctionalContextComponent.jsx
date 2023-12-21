import { useContext } from "react";
import { ThemeContext } from "./Theme";

// Consumer
export default function FunctionalContextComponent() {

    const darkTheme = useContext(ThemeContext)

    const themeStyle = {
        padding: '2rem',
        margin: '2rem',
        color: darkTheme ? '#CCC' : '#333',
        backgroundColor: darkTheme ? '#333' : '#CCC'
    }

    return (
        <div style={themeStyle}>Functional Context Example</div>
    )

}