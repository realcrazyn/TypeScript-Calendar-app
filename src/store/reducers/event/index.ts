import { IEvent } from '../../../models/IEvent'
import { IUser } from '../../../models/IUser'
import { EventAction, EventActionEnum, EventState } from './types'

const initialState: EventState = {
  guests: [] as IUser[],
  events: [] as IEvent[],
}

const eventReducer = (
  state = initialState,
  action: EventAction
): EventState => {
  switch (action.type) {
    default:
      return state
    case EventActionEnum.SET_EVENTS:
      return { ...state, events: action.payload }
    case EventActionEnum.SET_GUESTS:
      return { ...state, guests: action.payload }
  }
}

export default eventReducer
