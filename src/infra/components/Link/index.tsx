import NextLink from 'next/link'

const Link = ({children, href}) => {
    return (
        <NextLink href={href}>
            {children}
        </NextLink>
    )
}

export default Link