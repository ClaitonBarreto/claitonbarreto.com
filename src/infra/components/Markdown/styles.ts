import dynamic from "next/dynamic";
import styled from "styled-components";
const ReactMarkdown = dynamic(() => import('react-markdown').then(mod => mod.default), { ssr: false });

export const Markdown = styled(ReactMarkdown)`
    margin-top: 2rem;
    h2 {
        margin-bottom: 1rem;
    }
`