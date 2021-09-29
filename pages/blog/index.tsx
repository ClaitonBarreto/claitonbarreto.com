import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Head from 'src/infra/components/Head'
import { Flex } from 'src/infra/styles/Container'
import Profile from 'src/containers/Profile'
import { GetServerSideProps } from 'next'
import client from 'src/apollo-client'
import { gql } from '@apollo/client'
import Markdown from 'src/infra/components/Markdown'
import Card from 'src/components/Card'


const App = styled.div`
  padding: 2rem;
  height: 100vh;
`

export default function About({ posts }) {
    return (
        <App>  
            <Head title="Home" />
            <Flex 
                direction="column"
                justify="space-beetween"
            >
                <Profile />
                {posts.map((post) => (
                    <Card 
                        title={post.title}
                        key={post.id}
                        link={`/blog/${post.slug}`}
                    />
                ))}
            </Flex>
        </App>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    
    const { data } = await client.query({
        query: gql`
        query 
            {
                allPosts(filter:{isActive:{eq:1}}) {
                  title,
                  id,
                  slug
                }
     }              
        
    `})

    console.log(data.allPosts)

    return {
        props: {
            posts: data.allPosts
        }
    }
}