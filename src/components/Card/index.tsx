import { Flex } from "src/infra/styles/Container"
import Link from 'next/link'

import * as S from './styles'

interface CardProps {
    title:string
    link?:string
    content?:string
    children?: JSX.Element | Element
}

const Card = ({ content, title, link, children }: CardProps) => {

    return (
        <S.CardContainer>
            <Link href={link ? link : ''}>
                <Flex 
                    direction="column"
                    justify="space-beetween"
                > 
                    <S.CardTitle>{title}</S.CardTitle>
                    {content && <S.CardContent>{content}</S.CardContent>}
                    {children && <S.CardContent>{children}</S.CardContent>}
                </Flex>
            </Link>
        </S.CardContainer>
    )

}

export default Card