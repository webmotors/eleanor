import * as React from 'react'
import styled from 'styled-components'
import { Name, Welcome } from './style'

interface IProps {
    name?: string,
}

export default ({ name }: IProps) => {

    const WelcomeWithName = styled(Welcome)`
        display: ${name ? 'inline' : 'none'};
    `

    const BasicWelcome = styled(Welcome)`
        display: ${!name ? 'inline' : 'none'};
    `

    return (
        <>
            <WelcomeWithName>
                Say hello to
                <Name>{ ' ' + name }</Name>
            </WelcomeWithName>

            <BasicWelcome>
                Hello World
            </BasicWelcome>
        </>
    )
}
