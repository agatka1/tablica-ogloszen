import { Component, DoCheck, OnInit } from '@angular/core';
import { OgloszeniaService } from 'src/app/ogloszenia.service';
import { ogloszenie } from 'src/app/ogloszenie';

@Component({
  selector: 'app-ogloszenia',
  templateUrl: './ogloszenia.component.html',
  styleUrls: ['./ogloszenia.component.css']
})
export class OgloszeniaComponent implements OnInit, DoCheck {

  constructor(private ogloszenia: OgloszeniaService) {}

  announcements: ogloszenie[] = [];

  ngOnInit(): void {
    this.ogloszenia.filter();
    this.notImportantOgloszenia = this.ogloszenia.notImportantOgloszenia;

    this.ogloszenia.ogloszeniaChanged.subscribe( (ogloszenia: ogloszenie[]) => {
      this.announcements = ogloszenia;
      this.notImportantOgloszenia = this.announcements.filter(o => o.important === false);
    })
  }

  ngDoCheck(): void {
    //this.ogloszenia.filter();
    //this.notImportantOgloszenia = this.ogloszenia.notImportantOgloszenia;
  }

  notImportantOgloszenia: ogloszenie[] = [];

  onDoImportant(ogloszenie: ogloszenie, i: number) {
    ogloszenie.important = true;
    this.ogloszenia.doImportant(ogloszenie, i);
    this.notImportantOgloszenia = this.ogloszenia.notImportantOgloszenia;
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
