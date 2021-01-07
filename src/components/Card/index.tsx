import React from 'react'

import { SContainer } from './styles'

interface ICard {
    name: string
}

const Card: React.FC<ICard> = ({ name }) => {
    return <SContainer>{name}</SContainer>
}

export default Card
