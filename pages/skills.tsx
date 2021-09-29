import styled from 'styled-components'

import Head from '../src/infra/components/Head'
import { Flex } from 'src/infra/styles/Container'
import Profile from 'src/containers/Profile'
import { GetServerSideProps, GetStaticProps } from 'next'
import client from 'src/apollo-client'
import { gql } from '@apollo/client'
import AboutText from 'src/components/AboutText'
import Image from 'next/image'
import NodeJsIcon from 'src/icons/nodejs.svg'
import Card from 'src/components/Card'

const App = styled.div`
  padding: 2rem;
  height: 100vh;
`

const TechsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    gap: 2;

    img:hover {
        filter: grayscale(0%);
    }

    img {
        filter: grayscale(100%);
    }
`

const Icon = styled(Image)`
    width: 10px;
    border: 1px solid black;
`

const FrontEnd = () => {
    return (
        <h1>
            Front-End
        </h1>
    )
}

export default function About({ info }) {
    return (
        <App>  
            <Head title="Home" />
            <Flex 
                direction="column"
                justify="space-beetween"
            >
                <Profile />
                <Flex>
                    <Card 
                        title="Front-end"
                    >
                        <ul>
                            <li>HTML5 | CSS3 | JavaScript</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>Typescript</li>
                            <li>AngularJS</li>
                        </ul>
                    </Card>
                    <Card 
                        title="Back-end"
                    >
                        <ul>
                            <li>NodeJS</li>
                            <li>PHP / Laravel</li>
                            <li>NextJS</li>
                            <li>Typescript</li>
                            <li>AngularJS</li>
                        </ul>
                    </Card>
                    <Card 
                        title="Front-end"
                    >
                        <ul>
                            <li>HTML5 | CSS3 | JavaScript</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>Typescript</li>
                            <li>AngularJS</li>
                        </ul>
                    </Card>
                </Flex>
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