import { combineReducers } from 'redux';
import { reducers } from './reducers';
import { IAppAction } from './action';
import { routerReducer } from 'react-router-redux';
import { IAppState } from './state/app-state';

const appReducer = combineReducers({
    ...reducers,
    router: routerReducer
});
export const rootReducer = (state: IAppState, action: IAppAction) => {
    return appReducer(state, action)
};