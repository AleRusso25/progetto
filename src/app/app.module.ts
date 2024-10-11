import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './componenti/brand/brand.component';
import { HomeComponent } from './componenti/home/home.component';
import { CardComponent } from './componenti/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    HomeComponent,
    CardComponent
  ] ,
  imports: [
     HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
