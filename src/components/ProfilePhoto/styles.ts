import styled from 'styled-components'
import Image from 'next/image'

interface PhotoProps {
    photoWidth: string
}

export const Photo = styled.img<PhotoProps>`
    width: ${props => props.photoWidth};
    border-radius: 2rem;
    transition: all .2s;
    opacity: .99;
    /* border: 1px solid ${({theme}) => theme.primary}; */
    box-shadow: 1px 2px 2px ${({theme}) => theme.shadow};
    margin-bottom: 1rem;
    
    /* :hover {
        box-shadow: 1px 2px 2px ${({theme}) => theme.negative};
    } */
`