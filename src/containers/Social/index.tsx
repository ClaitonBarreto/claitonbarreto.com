import SocialIcon, { Social } from '../../components/SocialIcon'
import * as S from './styles'

const Socials = [
  {
      name: Social.github,
      url: 'https://github.com/claitonbarreto'
  },
  {
      name: Social.twitter,
      url: 'https://twitter.com/_claitonbarreto'
  },
  {
      name: Social.linkedin,
      url: 'https://www.linkedin.com/in/claitonbarreto'
  },
  {
      name: Social.instagram,
      url: 'https://www.instagram.com/_claitonbarreto'
  }
]

const SocialContainer = () => {

    return (
        <S.SocialsContainer>
            {Socials.map((social, index) => (
                <SocialIcon 
                    key={index} 
                    social={social.name} 
                    href={social.url}
                />
            ))}
        </S.SocialsContainer>
    )
}

export default SocialContainer