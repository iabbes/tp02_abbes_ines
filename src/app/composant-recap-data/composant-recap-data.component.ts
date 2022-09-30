import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-composant-recap-data',
  templateUrl: './composant-recap-data.component.html',
  styleUrls: ['./composant-recap-data.component.css']
})
export class ComposantRecapDataComponent implements OnInit {

  constructor() { }

  @Input() nom !: String;
  @Input() prenom !: String;
  @Input() adresse !: String;
  @Input() codepostal !: Number;
  @Input() ville !: String;
  @Input() tel !: Number;
  @Input() mail !: String;
  @Input() civilite !: String;
  @Input() login !: String;
  @Input() password !: String;
  @Input() password2 !: String;

  @Output() change: EventEmitter<String> = new EventEmitter<String>();
  
  sendMessage(){
    this.change.emit('Bonjour');
  }

  ngOnInit(): void {
  }
}
