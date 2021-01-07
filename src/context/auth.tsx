import React, { createContext, useCallback, useState, useContext } from 'react'

import api from '../services/api'

interface IAuthState {
    token: string
}

interface ISignInCredentials {
    email: string
    password: string
}

interface IAuthContextData {
    token: string
    signIn(credentials: ISignInCredentials): Promise<void>
    signOut(): void
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<IAuthState>(() => {
        const token = localStorage.getItem('@ProEnem: token')

        if (token) {
            return { token }
        }

        return {} as IAuthState
    })

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post(
            'v1/token',
            {
                email,
                password
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Brand': 'proenem'
                }
            }
        )

        const { token } = response.data

        localStorage.setItem('@ProEnem: token', `Bearer ${token}`)

        setData({ token })
    }, [])

    const signOut = useCallback(() => {
        localStorage.removeItem('@ProEnem: token')

        setData({} as IAuthState)
    }, [])

    return (
        <AuthContext.Provider value={{ token: data.token, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContextData {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used whitin an AuthProvider')
    }

    return context
}

export { AuthProvider, useAuth }
