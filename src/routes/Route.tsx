import React from 'react'
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouterProps,
    Redirect
} from 'react-router-dom'

import { useAuth } from '../context/auth'

interface RouteProps extends ReactDOMRouterProps {
    isPrivate?: boolean
    component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { token } = useAuth()

    return (
        <ReactDOMRoute
            {...rest}
            render={() => {
                return isPrivate === !!token ? (
                    <Component />
                ) : (
                    <Redirect to={{ pathname: isPrivate ? '/' : '/profile' }} />
                )
            }}
        />
    )
}

export default Route
