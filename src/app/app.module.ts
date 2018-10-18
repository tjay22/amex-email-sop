import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ErrorHandler, Injectable} from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http'; 

import { MatSidenavModule } from '@angular/material/sidenav';

import { ErrorsHandler } from './handlers/error-handler';
import { AppRoutingModule } from './app-routing.module';

import { EscapeHTML } from './pipes/escapeHTML';
import { SafeHtml } from './pipes/safeHtml';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { NonDevelopersComponent } from './non-developers/non-developers.component';
import { DownloadsComponent } from './downloads/downloads.component';


@NgModule({
  declarations: [
    AppComponent,
    EscapeHTML,
    SafeHtml,
    DevelopersComponent,
    NonDevelopersComponent,
    DownloadsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    HighlightModule.forRoot({ theme: 'railscasts' }),
    MatSidenavModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
