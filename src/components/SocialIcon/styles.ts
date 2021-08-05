import styled from "styled-components";

export const IconWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    margin: 1.7rem 1rem;
    
    svg {
        stroke: ${({theme}) => theme.negative};
        stroke-width: 1.5px;
        width: 2rem;
        height: 2rem;
        position: relative;
        transition: .2s;
        cursor: pointer;

        :hover {
            stroke: ${({theme}) => theme.primary};
        }
    }
`