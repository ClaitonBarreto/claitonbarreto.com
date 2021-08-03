import { Children, createContext, useContext, useEffect, useState } from 'react'

export enum Theme {
    light = 'light',
    dark = 'dark'
}

interface AppContextProps {
    theme:Theme;
    lang?: 'ptbr' | 'en';
    toggleTheme: (theme:Theme) => void
}

const DefaultValues:AppContextProps = {
    theme:Theme.light,
    lang: 'ptbr',
    toggleTheme: () => {}
}

const Context = createContext<AppContextProps>(DefaultValues)

export function useTheme() {
    return useContext(Context)
} 
    
const AppContext = ({children}) => {

    const [theme, setTheme] = useState<Theme>(Theme.light)

    const toggleTheme = () => {
        console.log(theme)
        setTheme(theme === Theme.light ? Theme.dark : Theme.light)
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
export { Context }