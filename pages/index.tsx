import styled from 'styled-components'

import Head from '../src/infra/components/Head'
import { Flex } from 'src/infra/styles/Container'
import Profile from 'src/containers/Profile'
import Card from 'src/components/Card'
import SocialContainer from 'src/containers/Social'

const App = styled.div`
  padding: 2rem;
  height: 100vh;
`

export default function Home() {
  return (
    <App>
      <Head title="Home" />
      <Flex 
        direction="column"
        justify="space-beetween"
      >
        <Profile hasSubtitle/>
        <Flex justify="space-evenly">
          <Card 
            title="Sobre mim"
            content="Não espere aqueles textos de currículos, clica pra saber mais sobre mim"
          />
          <Card 
            title="Minhas skills"
            content="As principais techs em que trabalho hoje"
          />
        </Flex>
      </Flex>
    </App>
  )
}
