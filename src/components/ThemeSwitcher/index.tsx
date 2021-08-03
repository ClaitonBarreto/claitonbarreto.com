import { Theme } from 'src/context/Theme';
import { useTheme } from '../../context/Theme';
import * as S from './styles'

const ThemeSwitcher = (props) => {

    const { theme, toggleTheme } = useTheme()

    return (
        <S.Switcher onClick={() => toggleTheme(theme === Theme.light ? Theme.dark : Theme.light)}>
            <S.Toggler />
        </S.Switcher>
    )

}

export default ThemeSwitcher;