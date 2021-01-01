import React from 'react';
import { Route as ReactDomRoute, RouteProps, Redirect } from 'react-router-dom';

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const token = localStorage.getItem('@Proenem:token');

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'detail',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
