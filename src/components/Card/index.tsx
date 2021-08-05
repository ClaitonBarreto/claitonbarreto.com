import { Flex } from "src/infra/styles/Container"
import Link from 'next/link'

import * as S from './styles'

interface CardProps {
    title:string
    content:string
    link:string
}

const Card = ({ content, title, link }: CardProps) => {

    return (
        <S.CardContainer>
            <Link href={link}>
                <Flex 
                    direction="column"
                    justify="space-beetween"
                    > 
                    <S.CardTitle>{title}</S.CardTitle>
                    <S.CardContent>{content}</S.CardContent>
                </Flex>
            </Link>
        </S.CardContainer>
    )

}

export default Card