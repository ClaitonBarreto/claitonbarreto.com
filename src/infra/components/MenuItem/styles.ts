import styled from "styled-components";

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const MenuItemText = styled.span`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    transition: all .2s;
    cursor: pointer;
    :hover {
        color: ${({ theme }) => theme.primary};
    }
`