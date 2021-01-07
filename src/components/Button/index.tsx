import React, { ButtonHTMLAttributes } from 'react'

import { SContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <SContainer {...rest}>{children}</SContainer>
)

export default Button
