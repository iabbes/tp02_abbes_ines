import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Client } from '../../objets/client';
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
  
  client !: Client; 


  creerClientEtAfficher(){
    this.client = new Client(this.nom, this.prenom, this.adresse, this.codepostal, this.ville, this.tel, this.email, this.civilite, this.login, this.password, this.password2);
  }

  desaffiche(){
    this.client = null;
  }

//!: --> signifie que la variable sera initialisé par la suite par un modèle de données
  ngOnInit(): void {
  }
}
