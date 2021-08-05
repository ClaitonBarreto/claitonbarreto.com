import { Flex } from "src/infra/styles/Container";
import { Text } from 'src/infra/styles/Typograph'

interface AboutTextProps {
    text: string
}

const AboutText = ({text}: AboutTextProps) => {

    return(
        <Flex align="flex-start">
            <Text p="3rem 0">{text}</Text>
        </Flex>
    )

}

export default AboutText;