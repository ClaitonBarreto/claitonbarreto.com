import styled from 'styled-components'


interface FlexProps {
    direction?:string
    justify?:string
    align?:string
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : 'row'};
    justify-content: ${({justify}) => justify ? justify : 'center'};
    align-items: ${({align}) => align ? align : 'center'};
    width: 100%;
    height: 100%;
`

