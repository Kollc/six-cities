import { AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks/hooks';
import { getUserAuthStatus } from '../../store/user-process/selector';

type PrivateRouteProps = {
  children: JSX.Element,
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element | null {
  const authorization = useAppSelector(getUserAuthStatus);

  return(
    authorization === AuthorizationStatus.Auth
      ? children
      : null
  );
}

export default PrivateRoute;
