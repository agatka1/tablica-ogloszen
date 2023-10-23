import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { OgloszeniaService } from './ogloszenia.service';

@Directive({
  selector: '[appRequiredCustom]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RequiredCustomDirective, multi: true }]
})
export class RequiredCustomDirective implements Validator {

  constructor( private ogloszenia: OgloszeniaService ) {}

  editedOgloszenie = this.ogloszenia.edytujOgloszenie;

  validate(control: AbstractControl): ValidationErrors | null {
    // Własne instrukcje walidacji
    const sameTitleObject = this.ogloszenia.ogloszenia.find( item => item.title === control.value);
    if (control.value === sameTitleObject?.title || control.value === '') {
      return { customRequired: true };
    }
    return null; // Jeśli dane są poprawne, zwróć null
  }
} 
