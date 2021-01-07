import React, { createContext, useCallback, useContext, useState } from 'react'
import { uuid } from 'uuidv4'
import ToastContainer from '../components/ToastContainer'

export interface IToastMessage {
    id: string
    type?: 'success' | 'error' | 'inf'
    title: string
    description?: string
}

interface ToastContextData {
    addToast(message: Omit<IToastMessage, 'id'>): void
    removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<IToastMessage[]>([])

    const addToast = useCallback(
        ({ type, title, description }: Omit<IToastMessage, 'id'>) => {
            const id = uuid()

            const toast = {
                id,
                type,
                title,
                description
            }

            setMessages((state) => [...state, toast])
        },
        []
    )
    const removeToast = useCallback((id: string) => {
        setMessages((state) => state.filter((message) => message.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    )
}

function useToast(): ToastContextData {
    const context = useContext(ToastContext)

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }

    return context
}

export { ToastProvider, useToast }
