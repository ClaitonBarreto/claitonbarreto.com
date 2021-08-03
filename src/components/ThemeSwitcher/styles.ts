import { Theme } from "src/context/Theme";
import styled from "styled-components";

export const Switcher = styled.div`
    cursor: pointer;
    width: 3.5rem;
    height: 1.5rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.negative};

    display: flex;
    align-items: center;
    padding: .1rem;
`

interface TogglerProps {
    currentTheme: Theme;
}

export const Toggler = styled.div<TogglerProps>`
    width: 40%;
    height: 90%;
    border-radius: 100%;
    background-color: ${({theme}) => theme.background};
    position: relative;
    left: ${({currentTheme}) => currentTheme === Theme.light ? '0' : '60%'};
`