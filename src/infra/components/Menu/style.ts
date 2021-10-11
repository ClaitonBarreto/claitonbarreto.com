import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.absoluteBackground};

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;

    border-bottom: 1px solid ${({ theme }) => theme.border};
    box-shadow: 1px 1px 1px ${({ theme }) => theme.shadow};
`

export const MenuItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-right: 3rem;
`