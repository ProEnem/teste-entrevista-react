import React from 'react'

import { SContainer } from './styles'

interface TooltipProps {
    title: string
    className?: string
}

const Tooltip: React.FC<TooltipProps> = ({
    title,
    className = '',
    children
}) => {
    return (
        <SContainer className={className}>
            {children}
            <span>{title}</span>
        </SContainer>
    )
}

export default Tooltip
