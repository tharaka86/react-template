export interface IApplicationState {
    items: any;
    error: any;
}

export const defaultAppState: IApplicationState = {
    items: undefined,
    error: undefined
}

export const getDefaultAppState = (): IApplicationState => {
    return { ...defaultAppState };
}