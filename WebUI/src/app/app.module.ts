import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OperationServiceService } from './operation-service.service';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppConfig } from './app.config'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OperationServiceService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
