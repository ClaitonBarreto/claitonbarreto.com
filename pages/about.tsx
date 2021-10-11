import styled from 'styled-components'
import Head from 'src/infra/components/Head'
import { Flex } from 'src/infra/styles/Container'
import Profile from 'src/containers/Profile'
import { GetServerSideProps } from 'next'
import client from 'src/apollo-client'
import { gql } from '@apollo/client'
import Markdown from 'src/infra/components/Markdown'
import Menu from 'src/infra/components/Menu'


const App = styled.div`
  padding: 2rem;
  height: 100vh;
`

export default function About({ info }) {
    return (
        <App>  
            <Head title="Sobre mim - Claiton Barreto" />
            <Menu />
            <Flex 
                direction="column"
                justify="space-beetween"
            >
                <Profile />
                <Markdown>
                    {info.content}
                </Markdown>
            </Flex>
        </App>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    
    const { data } = await client.query({
        query: gql`
        query {
            info(filter: {title: {eq: "sobre-mim"}}) {
                title
                content
            }
        }
    `})

    return {
        props: {
            info: data.info
        }
    }
}