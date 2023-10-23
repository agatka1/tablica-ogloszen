import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { OgloszeniaService } from './ogloszenia.service';

@Directive({
  selector: '[appCustomRequired]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomRequiredDirective, multi: true }]
})
export class CustomRequiredDirective implements Validator {

  constructor( private ogloszenia: OgloszeniaService ) {}

  editedOgloszenie = this.ogloszenia.edytujOgloszenie;

  validate(control: AbstractControl): ValidationErrors | null {
    // Własne instrukcje walidacji
    const sameTitleObject = this.ogloszenia.ogloszenia.find( item => item.title === control.value);
    if (control.value === sameTitleObject?.title && control.value !== this.editedOgloszenie.title || control.value === '') {
      return { customRequired: true };
    }
    return null;
  }
} 
