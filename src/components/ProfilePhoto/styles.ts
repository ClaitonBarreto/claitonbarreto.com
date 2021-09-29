import styled from 'styled-components'
import Image from 'next/image'

interface PhotoProps {
    photoWidth: string
}

export const Photo = styled.img<PhotoProps>`
    width: ${props => props.photoWidth};
    border-radius: 2rem;
    opacity: .99;
    box-shadow: 1px 2px 2px ${({theme}) => theme.shadow};
    margin-bottom: 1rem;
    
    @media(max-width: 768px) {
        width: 35%;
    }
`