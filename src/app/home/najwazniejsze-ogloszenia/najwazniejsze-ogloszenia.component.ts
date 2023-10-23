import { Component, DoCheck, OnInit } from '@angular/core';
import { OgloszeniaService } from 'src/app/ogloszenia.service';
import { ogloszenie } from 'src/app/ogloszenie';

@Component({
  selector: 'app-najwazniejsze-ogloszenia',
  templateUrl: './najwazniejsze-ogloszenia.component.html',
  styleUrls: ['./najwazniejsze-ogloszenia.component.css']
})
export class NajwazniejszeOgloszeniaComponent implements DoCheck, OnInit {
  
  constructor(private ogloszenia: OgloszeniaService) {}

  announcements: ogloszenie[] = [];

  ngOnInit(): void {
    this.ogloszenia.filter();
    this.importantOgloszenia = this.ogloszenia.importantOgloszenia;

    this.ogloszenia.ogloszeniaChanged.subscribe( (ogloszenia: ogloszenie[]) => {
      this.announcements = ogloszenia;
      this.importantOgloszenia = this.announcements.filter(o => o.important === true);
    })
  }

  ngDoCheck(): void {
    //this.ogloszenia.filter();
    //this.importantOgloszenia = this.ogloszenia.importantOgloszenia;
  }

  importantOgloszenia: ogloszenie[] = [];

  
  onDoNotImportant(ogloszenie: ogloszenie, i: number) {
    ogloszenie.important = false;
    this.ogloszenia.doNotImportant(ogloszenie, i);
    this.importantOgloszenia = this.ogloszenia.importantOgloszenia;
  }
  
  onDelete(ogloszenie: ogloszenie) {
    this.ogloszenia.onDelete(ogloszenie);
  }

  toSee(ogloszenie: ogloszenie, i: number) {
    this.ogloszenia.onToSee(ogloszenie, i);
  }

  toEdit(ogloszenie: ogloszenie) {
    this.ogloszenia.onToEdit(ogloszenie);
  }

  favChange(ogloszenie: ogloszenie) {
    ogloszenie.fav = !ogloszenie.fav;
  }

}
