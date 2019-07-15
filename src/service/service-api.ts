import axios, { AxiosRequestConfig } from 'axios';
import { from , Observable } from 'rxjs';

import appConig from '../app-config';


const config = (url: string, data?: any, extraHeaders?: any) => {
    let endPoint = appConig.url;

    return {
        url: endPoint + '/' + url,
        data: data || {},
        headers: {
            ...extraHeaders
        }
    };
};


const requestMethods = {

    get(url: string, data: any): AxiosRequestConfig {
        return {
            ...config(url, data)
        }
    }
}

export const api = {
    get(url: string, data?: any): Observable<any> {
        return from(axios(requestMethods.get(url, data)));
    }
}