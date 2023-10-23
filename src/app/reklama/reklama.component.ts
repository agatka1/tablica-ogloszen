import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { offer } from '../offer.model';
import { Router } from '@angular/router';
import { OgloszeniaService } from '../ogloszenia.service';

@Component({
  selector: 'app-reklama',
  templateUrl: './reklama.component.html',
  styleUrls: ['./reklama.component.css']
})
export class ReklamaComponent implements OnInit {
  @ViewChild('f')
  form!: NgForm;

  constructor( private router: Router, private ogloszenia: OgloszeniaService ) {}

  offers: offer[] = [
    {
      term: '1 tydzień',
      cost: 58.99
    },
    {
      term: '2 tygodnie',
      cost: 89.99
    },
    {
      term: '1 miesiąc',
      cost: 125.99
    },
    {
      term: '3 miesiące',
      cost: 250.99
    },
    {
      term: '6 miesięcy',
      cost: 400
    }
  ];

  ngOnInit(): void {
    setTimeout( () => {
      this.form.form.patchValue(
        {'offer': 58.99}
      );
    }, 0);
  }

  ngSubmit() {
    const imgUrl = this.form.value.photo;

    const cena: string = 'z twojego konta zostanie pobrane ' + this.form.value.offer.toString() + 'zł';
    const result = window.confirm(cena);

    if (result) {
      this.router.navigate(["/ogloszenia"]);
      setTimeout( () => {
        this.ogloszenia.photoEmitter.emit(imgUrl);
      }, 0)

    }
    console.log(this.form.value.offer);
  }
}
