import Link from "next/link";
import React from "react";

import { MenuItem as MenuItemContainer, MenuItemText } from './styles'

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem = ({href, label}:MenuItemProps) => {
    return (
        <MenuItemContainer>
            <Link href={href}>
                <MenuItemText>{label}</MenuItemText>
            </Link>
        </MenuItemContainer>
    )
}

export default MenuItem;