import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantTetiereComponent } from './composant-tetiere/composant-tetiere.component';
import { ComposantFooterComponent } from './composant-footer/composant-footer.component';
import { ComposantFormulaireComponent } from './composant-formulaire/composant-formulaire.component';
import { ComposantRecapDataComponent } from './composant-recap-data/composant-recap-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComposantTetiereComponent,
    ComposantFooterComponent,
    ComposantFormulaireComponent,
    ComposantRecapDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
