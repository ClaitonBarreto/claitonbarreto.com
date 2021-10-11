import styled from "styled-components"

const StyledTag = styled.span<{mini?:boolean}>`
background-color: black;
margin: 0 .5rem;
padding: .2rem .5rem;
border-radius: 5px;
background-color: ${({theme, mini}) => mini ? theme.primary : theme.absoluteBackground};
border: 1px solid ${({theme}) => theme.primary};
cursor: pointer;
font-size: ${({mini}) => mini ? ".8rem" : "1rem"};
color: ${({theme, mini}) => mini ? '#eee' : theme.primary};

:hover {
    background-color: ${({theme}) => theme.absoluteBackground === '#fff' ? theme.primary : '#eee'};
    a{
        color: ${({theme}) => theme.absoluteBackground === '#fff' ? theme.absoluteBackground : '#000'};
    }
}


a {
    text-decoration: none;
    color: ${({theme}) => theme.text};
}

`
interface TagProps {
    tag: string
    mini?: boolean
}
const Tag = ({tag, mini}: TagProps) => {
    return (
        <StyledTag mini={mini}>
            {!mini ? <a href={`/tags/${tag}`}>{tag}</a> : tag}
        </StyledTag>
    )
}

export default Tag