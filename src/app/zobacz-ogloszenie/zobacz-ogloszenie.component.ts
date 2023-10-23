import { Component, OnInit } from '@angular/core';
import { OgloszeniaService } from '../ogloszenia.service';
import { ogloszenie } from '../ogloszenie';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-zobacz-ogloszenie',
  templateUrl: './zobacz-ogloszenie.component.html',
  styleUrls: ['./zobacz-ogloszenie.component.css']
})
export class ZobaczOgloszenieComponent implements OnInit {

  constructor(private ogloszenia: OgloszeniaService, private router: Router ) {}

  index = 0;

  pokazOgloszenie: ogloszenie = {
    title: '',
    description: '',
    important: false,
    category: ''
  };

  napis = '';

  podobneOgloszenia: ogloszenie[] = [];

  ngOnInit(): void {
  this.pokazOgloszenie = this.ogloszenia.zobaczOgloszenie;
    if(this.pokazOgloszenie.important) {
      this.napis = 'usuń z ważnych';
    } else {
      this.napis = 'oznacz jako ważne';
    } 
  this.index = this.ogloszenia.index;

    this.podobneOgloszenia = this.ogloszenia.ogloszenia.filter(item => item.category === this.pokazOgloszenie.category && item.title !== this.pokazOgloszenie.title);
  }

  changeImportant() {
    this.pokazOgloszenie.important = !this.pokazOgloszenie.important;
    if(this.pokazOgloszenie.important === true) {
      this.ogloszenia.doImportant(this.pokazOgloszenie, this.index);
    } else {
      this.ogloszenia.doNotImportant(this.pokazOgloszenie, this.index);
    }
  }

  onDelete() {
    this.ogloszenia.onDelete(this.pokazOgloszenie);
  }

  toEdit() {
    this.ogloszenia.onToEdit(this.pokazOgloszenie);
  }

  toSee(ogloszenie: ogloszenie, i: number) {
    this.router.navigate(['/ogloszenia', ogloszenie.title]);
    this.pokazOgloszenie = ogloszenie;
    this.index = i;
  }

}
