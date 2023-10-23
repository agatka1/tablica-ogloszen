import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { OgloszeniaService } from '../ogloszenia.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f')
  form!: NgForm;

  url: string = '';

  constructor(private ogloszenia: OgloszeniaService) {}

  przepelnienieTablicy = false;

  ngOnInit(): void {
    this.ogloszenia.przepelnienie.subscribe(data => {
      this.przepelnienieTablicy = data;
    });

    setTimeout(() => {
      this.form.setValue({
        'category': 'wszystkie',
        'favorite': false
      })
    }, 0);

    this.ogloszenia.photoEmitter.subscribe(data => {
      this.url = data;
      console.log(this.url);
  })
  }

  szukaj() {
    const kategoria = this.form.value.category;
    this.ogloszenia.categorySort(kategoria);
    const ulubione = this.form.value.favorite;
    this.ogloszenia.favoriteSort(ulubione);
  }

}
