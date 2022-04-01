import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona';

@Injectable()
export class PersonaService {
  // persona: Persona = {
  //   fullname: 'John Doe',
  //   street: 'Zaporozhye 11',
  //   city: 'Albany',
  //   postal: '90210',
  //   email: 'john.doe@mail.com',
  // };

  constructor(private http: HttpClient) {}

  getPersona() {
    //return this.persona;

    return this.http.get<Persona>('/assets/persona.json');
  }
}
