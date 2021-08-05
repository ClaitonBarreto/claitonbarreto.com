import styled from "styled-components";

export const Title = styled.h1`
    font-weight: 300;
`

interface SubTitleProps {

}

export const SubTitle = styled.h2<SubTitleProps>`
    font-weight: 200;
    ::after {
        content: '';
        display: block;
        background-color: ${({theme}) => theme.primary};
        width: 65%;
        height: 1px;
        margin-top: -1%;
    }
`

interface ParagraphProps {
    p?:string
    color?:string
}

export const Text = styled.p<ParagraphProps>`
    padding: ${({p}) => p || '0'};
    color: ${({color}) => color || '#000'};
`