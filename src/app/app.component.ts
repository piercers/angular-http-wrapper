import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'http-wrapper';

    constructor(private httpClient: HttpClient) {}

    getTasks() {
        return this.httpClient.get('todos').subscribe(
            (res) => {
                console.log(`[AppComponent] getTasks response: `, res);
            },
            (error) => {
                console.log(`[AppComponent] getTasks error: `, error);
            },
            () => {
                console.log('[AppComponent] getTasks complete');
            },
        );
    }

    getTaskError() {
        return this.httpClient.get('tasks/1001').subscribe(
            (res: any) => {
                console.log(`[AppComponent] getTaskError response: `, res);
                console.assert(!res.ok, `should skip the error handler`);
            },
            (error) => {
                console.log(`[AppComponent] getTaskError error: `, error);
            },
            () => {
                console.log('[AppComponent] getTaskError complete');
            },
        );
    }

    getTaskCatchError() {
        return this.httpClient
            .get('tasks/1001', { reThrowErrors: true } as any)
            .subscribe(
                (res: any) => {
                    console.log(
                        `[AppComponent] getTaskCatchError response: `,
                        res,
                    );
                    console.assert(
                        !res.ok,
                        `should be passed to error handler but wasn't`,
                    );
                },
                (error) => {
                    console.log(
                        `[AppComponent] getTaskCatchError error: `,
                        error,
                    );
                },
                () => {
                    console.log('[AppComponent] getTaskCatchError complete');
                },
            );
    }
}
