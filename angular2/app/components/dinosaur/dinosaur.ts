import { Component, OnInit } from '@angular/core';
import { DinosaurService } from '../../services/DinosaurService'

@Component({
  selector: 'dinosaur',
  template: `Hello<ul>
              <li *ngFor="let dino of dinos">{{ dino.species }}</li>
             </ul>`
})
export class DinosaurComponent implements OnInit {
  dinos: any[];
  error: any;

  constructor(private dinosaurService: DinosaurService) { }
  getHeroes() {
    this.dinosaurService
        .getDinos()
        .then(dinos => this.dinos = dinos)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
