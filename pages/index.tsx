import styled from 'styled-components'

import Head from '../src/infra/components/Head'
import { Flex } from 'src/infra/styles/Container'
import Profile from 'src/containers/Profile'
import Card from 'src/components/Card'
import SocialContainer from 'src/containers/Social'
import HomePageCard from 'src/containers/HomePageCards'
import { GetServerSideProps } from 'next'
import client from 'src/apollo-client'
import { gql } from '@apollo/client'

const App = styled.div`
  padding: 2rem;
  height: 100vh;
`

export default function Home({posts}) {
  console.log(posts)
  return (
    <App>
      <Head title="Home" />
      <Flex 
        direction="column"
        justify="space-beetween"
      >
        <Profile hasSubtitle/>
        <HomePageCard posts={[posts]}/>
      </Flex>
    </App>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    
  const { data } = await client.query({
      query: gql`
      query {
          post {
              title
              slug
          }
      }
  `})

  console.log(data)

  return {
      props: {
          posts: data.post
      }
  }
}
