import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpClientService, NgHttpClient } from './app-http-client.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [
        { provide: NgHttpClient, useClass: HttpClient },
        { provide: HttpClient, useClass: AppHttpClientService },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
