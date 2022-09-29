import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-composant-formulaire',
  templateUrl: './composant-formulaire.component.html',
  styleUrls: ['./composant-formulaire.component.css']
})
export class ComposantFormulaireComponent implements OnInit {

  constructor() { }

  nom !: String;
  prenom !: String;
  adresse !: String;
  codepostal !: Number;
  ville !: String;
  tel !: Number;
  email !: String;
  civilite !: String;
  login !: String;
  password !: String;
  password2 !: String;


//!: --> signifie que la variable sera initialisé par la suite par un modèle de données
  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}
