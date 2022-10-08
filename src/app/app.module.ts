import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TicketCardComponent } from './shared/components/ticket-card.component';
import { TicketTableComponent } from './shared/components/ticket-table.component';
import { LoadingComponent } from './shared/components/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TicketCardComponent,
    TicketTableComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
