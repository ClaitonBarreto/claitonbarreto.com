import ProfilePhoto from "src/components/ProfilePhoto"
import { SubTitle, Title } from "src/infra/styles/Typograph"

interface ProfileProps {
    hasSubtitle?:boolean
}

const Profile = ({ hasSubtitle }:ProfileProps) => {

    return (
        <>
            <ProfilePhoto />
            <Title>Claiton Barreto</Title>
            {hasSubtitle && 
                <SubTitle>Sotfware Engineer 💻</SubTitle>
            }
        </>
    )

}

export default Profile