import { IUser } from '../../../models/IUser'
import { AuthState, AuthAction, AuthActionsEnum } from './types'

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: '',
  user: {} as IUser,
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false }
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false }
    case AuthActionsEnum.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case AuthActionsEnum.SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default authReducer
