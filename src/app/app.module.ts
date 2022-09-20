import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MegaMenuModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
