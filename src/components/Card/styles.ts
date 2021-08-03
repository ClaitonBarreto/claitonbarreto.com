import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 20%;
    height: 160px;
    border: 1px solid ${({theme}) => theme.negative};
    border-radius: 1.5rem;
    padding: 2rem 0;
    cursor: pointer;
    transition: all .2s;
    color: ${({theme}) => theme.text};

    :hover {
        border: 1px solid ${({theme}) => theme.primary};
        box-shadow: 1px 2px 2px #bbb;
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