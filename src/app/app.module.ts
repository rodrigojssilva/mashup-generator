import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MashupService } from 'src/services/mashup.service';
import { DiceD10Component } from 'src/shared/dice-d10/dice-d10.component';
import { DiceD20Component } from 'src/shared/dice-d20/dice-d20.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceD10Component,
    DiceD20Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,

    AppRoutingModule
  ],
  providers: [
    MashupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
