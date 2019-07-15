import { ofType  } from 'redux-observable';
import { Observable } from 'rxjs';
import { Store } from 'redux';
import { IAppAction } from '../action';;
import { appActions, loadDataSuccess, loadDataError } from '../actions';
import { mergeMap, map } from 'rxjs/operators';
import { IAppState } from '../state/app-state';

export const fetchUserEpic = (action$: Observable<IAppAction>, store: Store<IAppState>, { api }: any) => action$.pipe(
    ofType(appActions.FETCH_DATA),
    mergeMap((action: IAppAction) =>
        api.get(`Publish/GetCountriesBySubRegion/${action.payload}`).pipe(
            map((response: Array<any>) => loadDataSuccess(response)),
            map((error: any) => Observable.ofType(loadDataError({ error })))
        )
    )
);