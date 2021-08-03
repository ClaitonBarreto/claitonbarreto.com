import { Children, createContext, useEffect, useState } from 'react'

export enum Theme {
    light = 'light',
    dark = 'dark'
}

interface AppContextProps {
    theme:Theme;
    lang?: 'ptbr' | 'en';
    setTheme: (theme:Theme) => void
}

const DefaultValues:AppContextProps = {
    theme:Theme.light,
    lang: 'ptbr',
    setTheme: () => {}
}

const Context = createContext<AppContextProps>(DefaultValues)

const AppContext = ({children}) => {

    const [theme, setTheme] = useState<Theme>(Theme.light)

    return (
        <Context.Provider value={{
            theme, setTheme
        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
export { Context }