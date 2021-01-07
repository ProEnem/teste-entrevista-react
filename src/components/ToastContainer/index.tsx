import React from 'react'
import { useTransition } from 'react-spring'

import SToast from './Toast'

import { IToastMessage } from '../../context/toast'
import { SContainer } from './styles'

interface IToastContainerProps {
    messages: IToastMessage[]
}

const ToastContainer: React.FC<IToastContainerProps> = ({ messages }) => {
    const messagesWithTransitions = useTransition(
        messages,
        (message) => message.id,
        {
            from: { right: '-120%' },
            enter: { right: '0%' },
            leave: { right: '-120%' }
        }
    )

    return (
        <SContainer>
            {messagesWithTransitions.map(({ item, key, props }) => (
                <SToast key={key} message={item} />
            ))}
        </SContainer>
    )
}

export default ToastContainer
