import { Component } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class PersonaComponent {
  persona: Persona;

  constructor(private personaService: PersonaService) {
    this.personaService
      .getPersona()
      .subscribe((data: Persona) => (this.persona = data));
  }
}
