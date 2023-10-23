import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { OgloszeniaService } from 'src/app/ogloszenia.service';
import { ogloszenie } from 'src/app/ogloszenie';

@Component({
  selector: 'app-dodaj-ogloszenie',
  templateUrl: './dodaj-ogloszenie.component.html',
  styleUrls: ['./dodaj-ogloszenie.component.css']
})
export class DodajOgloszenieComponent {
  @ViewChild('f')
  signupForm!: NgForm;

  @ViewChild('title')
  titleOfOgloszenie!: NgModel;

  constructor( private ogloszenia: OgloszeniaService, private router: Router) {}

  checkTitles() {
    const zlyTitle = this.ogloszenia.ogloszenia.find(item => item.title === this.titleOfOgloszenie.value);
    if(zlyTitle) {
      console.log("zmień");
    }
  }

  onSubmit(): void {
    const newOgloszenie: ogloszenie = {
      title: this.signupForm.value.title,
      description: this.signupForm.value.description,
      category: this.signupForm.value.category,
      important: this.signupForm.value.important === true ? true : false
    };
    this.ogloszenia.ogloszenia.push(newOgloszenie);
    //this.router.navigate(['../']);
    this.ogloszenia.tooManyOgloszenia();
  }

  onClean() {
    this.signupForm.reset();
  }

}
