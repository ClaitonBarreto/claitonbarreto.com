import { Flex } from "src/infra/styles/Container"
import Link from 'next/link'
import Tag from 'src/components/Tag'

import * as S from './styles'

interface CardProps {
    title:string
    link?:string
    content?:string
    children?: JSX.Element | Element
    tags?: string
}

const Card = ({ content, title, link, children, tags }: CardProps) => {

    const postTags = tags?.split(',').map(tag => tag.trim())

    console.log(tags)

    return (
        <S.CardContainer>
            <Flex
                justify="center"
                align="center"
            >
            <Link href={link ? link : ''}>
                <Flex direction="column" justify="center" align="center"> 
                    <S.CardTitle>{title}</S.CardTitle>
                    {postTags && <S.CardTags>{postTags.map(tag => <Tag tag={tag} key={tag} mini/>)}</S.CardTags>}
                </Flex>
            </Link>
            </Flex>
        </S.CardContainer>
    )

}

export default Card