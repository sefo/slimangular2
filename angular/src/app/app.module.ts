import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GrowlModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { UtilisateursService } from '../services/utilisateurs.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GrowlModule,
    DataTableModule,
    SharedModule
  ],
  providers: [UtilisateursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
