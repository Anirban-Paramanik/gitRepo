import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpSearchComponent } from './emp-search/emp-search.component';
import { HeaderComponent } from './header/header.component';
import {ApicallService} from './apicall.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpSearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
