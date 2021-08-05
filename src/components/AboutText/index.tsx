import { Flex } from "src/infra/styles/Container";
import { Text } from 'src/infra/styles/Typograph'

interface AboutTextProps {
    text: string
}

const AboutText = ({text}: AboutTextProps) => {

    return(
        <Flex align="flex-start" p="0 10rem">
            <Text p="3rem 22%" color="#333">{text}</Text>
        </Flex>
    )

}

export default AboutText;