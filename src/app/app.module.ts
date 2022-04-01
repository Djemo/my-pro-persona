import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonaComponent } from './persona.component';
import { PersonaService } from './persona.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, PersonaComponent],
  providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
