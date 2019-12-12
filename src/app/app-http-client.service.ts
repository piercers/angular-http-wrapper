import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

export const NgHttpClient = new InjectionToken<HttpClient>('NgHttpClient');

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
    providedIn: 'root',
})
export class AppHttpClientService {
    private requestConfig = {
        withCredentials: true,
    };

    constructor(@Inject(NgHttpClient) private httpClient: HttpClient) {}

    private catchError = (options: any = {}) =>
        catchError((error) => {
            console.log('[AppHttpClient] Error: ', error);
            return options.reThrowErrors ? throwError(error) : of(error);
        })

    get(url: string, options?: any) {
        return this.request('get', url, options);
    }

    post(url: string, body: any, options?: any) {
        return this.request('post', url, {
            body,
            ...options,
        });
    }

    private request(method: string, url: string, options?: any) {
        return this.httpClient
            .request(method, `${baseUrl}/${url}`, {
                ...this.requestConfig,
                ...options,
            })
            .pipe(
                tap((x) => {
                    console.log(`[AppHttpClient] Response: `, x);
                }),
                this.catchError(options),
            );
    }
}
