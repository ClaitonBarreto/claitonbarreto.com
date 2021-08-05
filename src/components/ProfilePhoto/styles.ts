import styled from 'styled-components'

interface PhotoProps {
    photoWidth: string
}

export const Photo = styled.img<PhotoProps>`
    width: ${({ photoWidth }) => photoWidth};
    border-radius: 100%;
    transition: all .2s;
    opacity: .99;
    border: 2px solid ${({theme}) => theme.primary};
    
    :hover {
        box-shadow: 1px 2px 2px #bbb;
    }
`