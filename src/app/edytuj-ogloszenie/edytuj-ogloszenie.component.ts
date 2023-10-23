import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OgloszeniaService } from '../ogloszenia.service';
import { ogloszenie } from '../ogloszenie';

@Component({
  selector: 'app-edytuj-ogloszenie',
  templateUrl: './edytuj-ogloszenie.component.html',
  styleUrls: ['./edytuj-ogloszenie.component.css']
})
export class EdytujOgloszenieComponent implements OnInit {
  @ViewChild('f')
  editedForm!: NgForm;

  constructor( private router: Router, private ogloszenia: OgloszeniaService ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.editedForm.setValue({
        title: this.ogloszenia.edytujOgloszenie.title,
        description: this.ogloszenia.edytujOgloszenie.description,
        category: this.ogloszenia.edytujOgloszenie.category,
        important: this.ogloszenia.edytujOgloszenie.important === true ? true : ''
      })
    }, 0)
  }

  onSubmit() {
    const updatedOgloszenie: ogloszenie = {
      title: this.editedForm.value.title,
      description: this.editedForm.value.description,
      category: this.editedForm.value.category,
      important: this.editedForm.value.important === true ? true : false
    };
    this.ogloszenia.saveUpdatedOgloszenie(updatedOgloszenie);
    this.router.navigate(['../']);
  }

  onCancel() {
  }

  onClear() {
    this.editedForm.reset();
  }
  
}
