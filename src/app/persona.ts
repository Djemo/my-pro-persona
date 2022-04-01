export interface Persona {
  info: PersonaInfo;
  skills: PersonaSkill[];
  history: PersonaHistory[];
  education: PersonaEducation[];
}

export interface PersonaInfo {
  fullname: string;
  address: PersonaInfoAddress;
  biography: PersonaInfoBiography;
}

export interface PersonaInfoAddress {
  street: string;
  city: string;
  postal: string;
  email: string;
  telephone: PersonaInfoTelephone[];
}

export interface PersonaInfoTelephone {
  name: string;
  number: string;
}

export interface PersonaInfoBiography {
  sections: string[];
}

export interface PersonaSkill {}

export interface PersonaHistory {}

export interface PersonaEducation {}
