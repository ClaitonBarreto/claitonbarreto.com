import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 20%;
    height: 160px;
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 1.5rem;
    padding: 2rem 0;
    margin: 3rem 1.5rem;
    cursor: pointer;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.absoluteBackground};

    :hover {
        border: 1px solid ${({theme}) => theme.primary};
        box-shadow: 1px 2px 2px ${({theme}) => theme.shadow};
    }

    @media(max-width: 900px) {
        width: 30%;
    }

    @media(max-width: 768px) {
        width: 80%;
        margin: 1.5rem 0;
    }
`

export const CardTitle = styled.h3`
    font-weight: 300;
    text-align: left;
    padding-left: 3rem;
    width: 100%;
    color: ${({theme}) => theme.text};

    ::after {
        content: '';
        display: block;
        position: relative;
        height: 1px;
        width: 40%;
        background-color: ${({theme}) => theme.primary};
    }
`

export const CardContent = styled.h4`
    font-weight: 200;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1.5rem;
    padding-bottom: 2.5rem;
    width: 70%
`