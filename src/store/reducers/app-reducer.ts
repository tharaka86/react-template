import { appActions } from "../actions";
import { IAppState, defaultAppState } from "../state";
import { IAppAction } from "../action";

export const handlers = {
    [appActions.FETCH_DATA_SUCCESS] : (state: IAppState, payload: any) : IAppState =>({
        ...state,
        items: payload
    }),
    [appActions.FETCH_DATA_ERROR] : (state: IAppState, payload: any) : IAppState =>({
        ...state,
        items: undefined,
        error : payload
    }),
}

const appReducer = (state: IAppState = {...defaultAppState}, action: IAppAction) => {
    return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action.payload) : state;
}

export default appReducer;