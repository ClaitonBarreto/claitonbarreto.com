import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Head from 'src/infra/components/Head'
import { Flex } from 'src/infra/styles/Container'
import { GetServerSideProps } from 'next'
import client from 'src/apollo-client'
import { gql } from '@apollo/client'
import SyntaxHighlighter from 'react-syntax-highlighter'
import * as codeStyles from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Menu from 'src/infra/components/Menu'
const ReactMarkdown = dynamic(() => import('react-markdown').then(mod => mod.default), { ssr: false }) as any;


const App = styled.div`
  padding: 2rem;
  height: 100vh;
`

const PostContainer = styled.div`
    position: relative;
    background-color: ${({theme}) => theme.absoluteBackground};
    width: 60%;
    max-width: 900px;
    padding: 3rem 2.5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    /* box-shadow: 0 0 10px rgba(0,0,0,0.1); */
    border: 1px solid ${({theme}) => theme.border};
    border-radius: 3rem;

    h1#title {
        font-size: 2.5rem;
        text-decoration: dashed underline;
    }
    
    #updatedAt {
        font-size: 1rem;
        color: ${({theme}) => theme.primary};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1:not(#title){
        font-size: 2rem;
        font-weight: bold;
        margin: 2rem 0 .7rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.3;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
    }

    p code {
        background-color: rgb(43,43,43);
        color: #fff;
        padding: .1rem .4rem;
    }

    span, pre code {
        font-size: 1rem;
    }

    pre {
        padding: 2rem;
    }

    pre > div {
        padding: 1rem !important;
    }
`

const StyledTag = styled.span`
    background-color: black;
    margin: 0 .5rem;
    padding: .2rem .5rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme.absoluteBackground};
    border: 1px solid ${({theme}) => theme.primary};
    cursor: pointer;

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

const Tag = ({tag}) => {
    return (
        <StyledTag>
            <a href="http://">{tag}</a>
        </StyledTag>
    )
}

export default function About({ post }) {

    const date = new Date(post._updatedAt).toLocaleDateString('pt-BR')

    const tags = post.tags.split(',').map(tag => tag.trim())

    return (
        <App>  
            <Head title={`${post.title} - Claiton Barreto`} />
            <Menu />
            <Menu />
            <Flex 
                direction="column"
                justify="space-beetween"
            >
                <PostContainer>
                    <h1 id="title">{post.title}</h1>
                    <Flex 
                        direction="row"
                        justify="space-between"
                        align="center"
                        style={{
                            height: '2%',
                            marginBottom: '1rem'
                        }}
                    >
                        <div>
                        {tags.map(tag => (
                            <Tag tag={tag} key={tag}/>
                        ))}
                        </div>
                        <h3 id="updatedAt">publicado em {date}</h3>
                    </Flex>
                    <ReactMarkdown 
                        components={{ 
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                  <SyntaxHighlighter
                                    style={codeStyles.a11yDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                  >
                                      {String(children).replace(/\n$/, '')}
                                  </SyntaxHighlighter>
                                  
                                ) : (
                                  <code className={className} {...props}>
                                    {children}
                                  </code>
                                )
                              }
                         }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </PostContainer>
            </Flex>
        </App>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    console.log(params)
    const { data } = await client.query({
        query: gql`
        query 
            {
                post(filter:{slug:{eq:"${params.slug}"}}) {
                  title,
                  id,
                  slug,
                  content,
                  _updatedAt,
                  tags
                }
     }              
        
    `})

    console.log(data)

    return {
        props: {
            post: data.post as string
        }
    }
}