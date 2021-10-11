import React from "react";
import Card from "src/components/Card";
import { Flex } from "src/infra/styles/Container";
import styled from "styled-components";

const FlexCard = styled(Flex)`
    

    @media(max-width: 650px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin-top: 2rem;
    }
`

interface IHomePageCard {
  posts: any[];
}

const HomePageCard = ({posts}:IHomePageCard) => {
  console.log(posts)
    return (
        <FlexCard justify="center" align="flex-start">
          {posts && posts.map((post:any) => (
            <Card
              key={post.id}
              title={post.title}
              link={`blog/${post.slug}`}
              tags={post.tags}
            />
          ))}
        </FlexCard>
    )
}

export default HomePageCard;