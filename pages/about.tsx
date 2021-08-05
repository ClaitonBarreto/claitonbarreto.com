import styled from 'styled-components'

import Head from '../src/infra/components/Head'
import { Flex } from 'src/infra/styles/Container'
import Profile from 'src/containers/Profile'
import { GetStaticProps } from 'next'
import client from 'src/apollo-client'
import { gql } from '@apollo/client'
import AboutText from 'src/components/AboutText'

const App = styled.div`
  padding: 2rem;
  height: 100vh;
`

export default function About({ info }) {
  
    console.log(info)
    return (
        <App>
            <Head title="Home" />
            <Flex 
                direction="column"
                justify="space-beetween"
            >
                <Profile />
                <AboutText text={info.content}/>
            </Flex>
        </App>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    
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