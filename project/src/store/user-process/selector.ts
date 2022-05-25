import { AuthorizationStatus, NameSpace } from '../../consts';
import { UserType } from '../../types/types';
import { State } from './../../types/state';

export const getUserAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].requireAuthorization;
export const getUserData = (state: State): UserType | null => state[NameSpace.User].user;
export const getUserError = (state: State): string => state[NameSpace.User].error;
