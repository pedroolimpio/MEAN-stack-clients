import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { HelpComponent } from './help/help.component';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { CustomHTTPService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    SearchComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CustomHTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
