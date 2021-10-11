import ThemeSwitcher from 'src/components/ThemeSwitcher'
import MenuItem from '../MenuItem'

import { MenuContainer, MenuItemsWrapper } from './style'

const Menu = () => {

    return (
        <MenuContainer>
            <ThemeSwitcher />
            <MenuItemsWrapper>
                <MenuItem 
                    href="/"
                    label="Home"
                />
                <MenuItem 
                    href="/about"
                    label="Sobre mim"
                />
                <MenuItem 
                    href="/blog"
                    label="Blog"
                />
            </MenuItemsWrapper>
        </MenuContainer>
    )

}

export default Menu