import { AuthorizationStatus } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element,
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element | null {
  const authorization = AuthorizationStatus.Auth;

  return(
    authorization === AuthorizationStatus.Auth
      ? children
      : null
  );
}

export default PrivateRoute;
