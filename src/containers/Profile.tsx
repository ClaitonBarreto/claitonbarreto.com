import ProfilePhoto from "src/components/ProfilePhoto"
import { SubTitle, Title } from "src/infra/styles/Typograph"
import SocialContainer from "./Social"

interface ProfileProps {
    hasSubtitle?:boolean
}

const Profile = ({ hasSubtitle }:ProfileProps) => {

    return (
        <>
            <ProfilePhoto />
            <Title>Claiton Barreto</Title>
            {hasSubtitle &&
                <> 
                    <SubTitle>Sotfware Engineer</SubTitle>
                    <SocialContainer />
                </>
            }
        </>
    )

}

export default Profile