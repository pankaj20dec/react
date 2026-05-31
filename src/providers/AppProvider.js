import {ThemeProvider} from "../contexts/ThemeContext";
export const AppProvider = ({children})=>{
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}