import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OgloszeniaComponent } from './home/ogloszenia/ogloszenia.component';
import { NajwazniejszeOgloszeniaComponent } from './home/najwazniejsze-ogloszenia/najwazniejsze-ogloszenia.component';
import { DodajOgloszenieComponent } from './home/dodaj-ogloszenie/dodaj-ogloszenie.component';
import { ZobaczOgloszenieComponent } from './zobacz-ogloszenie/zobacz-ogloszenie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { EdytujOgloszenieComponent } from './edytuj-ogloszenie/edytuj-ogloszenie.component';
import { CustomRequiredDirective } from './custom-required.directive';
import { RequiredCustomDirective } from './required-custom.directive';
import { ReklamaComponent } from './reklama/reklama.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OgloszeniaComponent,
    NajwazniejszeOgloszeniaComponent,
    DodajOgloszenieComponent,
    ZobaczOgloszenieComponent,
    PageNotFoundComponent,
    HomeComponent,
    EdytujOgloszenieComponent,
    CustomRequiredDirective,
    RequiredCustomDirective,
    ReklamaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
