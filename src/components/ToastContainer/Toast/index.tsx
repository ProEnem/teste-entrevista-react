import React, { useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'

import { IToastMessage, useToast } from '../../../context/toast'

import { SContainer } from './styles'

interface IToastProps {
    message: IToastMessage
}

const icons = {
    inf: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />
}

const Toast: React.FC<IToastProps> = ({ message }) => {
    const { removeToast } = useToast()

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [removeToast, message.id])

    return (
        <SContainer type={message.type} hasDescription={!!message.description}>
            {icons[message.type || 'inf']}

            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>

            <button onClick={() => removeToast(message.id)} type="button">
                <FiXCircle size={18} />
            </button>
        </SContainer>
    )
}

export default Toast
