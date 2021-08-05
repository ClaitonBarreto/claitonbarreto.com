import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'
import * as S from './styles'

export enum Social {
    github = 'github',
    twitter = 'twitter',
    linkedin = 'linkedin',
    instagram = 'instagram',
}

export interface SocialIconProps {
    social: Social;
    href:string
}

const SocialIcon = ({ social, href }:SocialIconProps) => {

    let Icon

    switch(social) {
        case Social.github:
            Icon = FiGithub
            break
        case Social.instagram:
            Icon = FiInstagram
            break
        case Social.twitter:
            Icon = FiTwitter
            break
        case Social.linkedin:
            Icon = FiLinkedin
            break
    }

    return (
        <S.IconWrapper>
            <a href={href} target="_blank" rel="noreferrer">
                <Icon />
            </a>
        </S.IconWrapper>
    )

}

export default SocialIcon