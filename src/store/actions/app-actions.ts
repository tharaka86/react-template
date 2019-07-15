import { IAppAction } from "../action";

export const appActions = {
    FETCH_DATA : 'FETCH_DATA',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR: 'FETCH_DATA_ERROR' 
};

export const loadData = (input:any) : IAppAction => ({
    type : appActions.FETCH_DATA,
    payload : input
});

export const loadDataSuccess = (result:any) : IAppAction => ({
    type : appActions.FETCH_DATA_SUCCESS,
    payload : result
});

export const loadDataError = (error:any) : IAppAction => ({
    type : appActions.FETCH_DATA_ERROR,
    payload : error
});