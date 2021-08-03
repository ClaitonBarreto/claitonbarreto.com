import { Flex } from "src/infra/styles/Container"

import * as S from './styles'

interface CardProps {
    title:string
    content:string
}

const Card = ({ content, title }: CardProps) => {

    return (
        <S.CardContainer>
            <Flex 
                direction="column"
                justify="space-beetween"
            > 
                <S.CardTitle>{title}</S.CardTitle>
                <S.CardContent>{content}</S.CardContent>
            </Flex>
        </S.CardContainer>
    )

}

export default Card