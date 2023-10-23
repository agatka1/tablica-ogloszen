import { EventEmitter, Injectable } from '@angular/core';
import { ogloszenie } from './ogloszenie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OgloszeniaService {

  ogloszeniaChanged = new Subject<ogloszenie[]>();

  constructor() {}

  notImportantOgloszenia: ogloszenie[] = [];

  importantOgloszenia: ogloszenie[] = [];

  ogloszenia: ogloszenie[] = [
    {
      title: "remont",
      description: "od jutra w naszej dzielnicy zaczynamy remont, przez co niektóre drogi będą tymczasowo zamknięte, prosimy o cierplwość i zrozumienie, będziemy o wszystkim na bieżąco informować",
      important: false,
      category: 'informacja',
      fav: false
    },
    {
      title: "przebudowa",
      description: "za niedługo będzie odbywać się przebudowa odcinka drogi przy ulicy Skalnej. Aby ruch drogowy przebiegał sprawnie, prosimy o korzystanie z ulic Masłowej i Kwiatowej",
      important: true,
      category: 'informacja',
      fav: false
    },
    {
      title: "impreza",
      description: "20 sierpnia odbywa się impreza, którą organizuje miejscowy klub teatralny. Serdecznie zapraszamy na godzinę 18 do szkoły podstawowej. W programie przedstawienie i tańce",
      important: false,
      category: 'wydarzenie',
      fav: false
    },
    {
      title: "wypadek",
      description: "jest nam bardzo przykro poinformować o wypadku, który miał miejsce zeszłej niedzieli. Prosimy o większą ostrożność podczas przechodzenia przez ulicę na pasach",
      important: false,
      category: 'informacja',
      fav: false
    },
    {
      title: "kupię działkę",
      description: "szukam dużej działki w okolicach ulicy Kasztanowej, ważne żeby nie znajdowała się ona na górce, ani innym wzniesieniu, teren płaski",
      important: true,
      category: 'sprzedaż',
      fav: false
    },
    {
      title: "szukam pracy",
      description: "poszukuję pracy, mam ukończone studia aktorskie, oraz należałem do miejscowej grupy teatralnej. Więcej informacji udzielę osobiście",
      important: true,
      category: 'poszukiwanie',
      fav: false
    },
    {
      title: "zaginiony pies",
      description: "zaginął biały, mały piesek, rasa: York, ostatnio widziany w okolicach lasu i jeziorka",
      important: true,
      category: 'poszukiwanie',
      fav: false
    },
    {
      title: "sprzedam samochód",
      description: "Mam do sprzedania samochód w dobrym stanie w kolorze czarnym, bez żadnych zarysów",
      important: false,
      category: 'sprzedaż',
      fav: false
    },
    {
      title: "poszukuję wolontariuszy",
      description: "Potrzebni wolontariusze do pomocy w organizacji festiwalu tego lata, termin biżej nie określony, chętnych zapraszamy do wypełnienia formularzu",
      important: true,
      category: 'poszukiwanie',
      fav: false
    },
    {
      title: "festyn",
      description: "W wakacji planujemy zorganizować festyn w naszym miasteczku. Chcemy, żeby była to impreza tematyczna i każdy się przebrał",
      important: false,
      category: 'wydarzenie',
      fav: false
    },
    {
      title: "nowe zasady",
      description: "Wchodzą nowe zasady korzystania z parkingów, prosimy o zapoznanie się z nimi i stosowanie się do nich",
      important: true,
      category: 'informacja',
      fav: false
    },
    {
      title: "powstanie nowy zespół",
      description: "Poszukujemy osób, które umieją śpiewać, bądź grać na jakich instrumentach i są chętne do stworzenia zespołu muzycznego",
      important: false,
      category: 'wydarzenie',
      fav: false
    },
    {
      title: "potrzebna pomoc!",
      description: "Jedna rodzica z naszego miasteczka potrzebuje pilnie pomocy. Organizujemy zbiórkę pieniędzy i potrzebnych rzeczy. Zachęcamy do pomocy",
      important: true,
      category: 'poszukiwanie',
      fav: false
    },
    {
      title: "opiekunka do dziecka",
      description: "Potrzebujemy odpowiedzialnej osoby do opieki nad 3-letnim chłopcem, 8h/dziennie",
      important: false,
      category: 'poszukiwanie',
      fav: false
    },
    {
      title: "stypendium",
      description: "Niedługo przyznamy stypendium naukowe kilku uczniom naszej szkoły, ale jest jeszcze okazja aplikować, do czego serdeznie zachęcamy",
      important: true,
      category: 'informacja',
      fav: false
    },
    {
      title: "wielka radość!",
      description: "Dziewczyna z naszej miejscowości została mistrzynią Polskie i w kwietniu pojedzie na mistrzostwa świata. Trzymajmy kciuki!",
      important: true,
      category: 'wydarzenie',
      fav: false
    },
    {
      title: "gratulacje dla ucznia szkoły nr 44",
      description: "Filip z klasy 8D zwyciężył w olimpiadzie fizycznej, na teście zdobył najwięcej punktów z całego województwo. Gratulacje!",
      important: false,
      category: 'informacja',
      fav: false
    },
  ]

  wszystkieOgloszenia: ogloszenie[] = this.ogloszenia;

  setOgloszenia(ogloszenia: ogloszenie[]) {
    this.ogloszenia = ogloszenia;
    this.ogloszeniaChanged.next(this.ogloszenia.slice());
  }

  doImportant(ogloszenie: ogloszenie, i: number) {
    this.check(ogloszenie, i);
    this.ogloszenia = this.ogloszenia.filter(o => o !== ogloszenie);
    this.ogloszenia.push(ogloszenie);
    this.wszystkieOgloszenia = this.ogloszenia;
    this.ogloszeniaChanged.next(this.ogloszenia.slice());
  }

  doNotImportant(ogloszenie: ogloszenie, i: number) {
    this.check(ogloszenie, i);
    this.ogloszenia = this.ogloszenia.filter(o => o !== ogloszenie);
    this.ogloszenia.push(ogloszenie);
    this.wszystkieOgloszenia = this.ogloszenia;
    this.ogloszeniaChanged.next(this.ogloszenia.slice());
  }

  categorySort(kategoria: string) {
    if(kategoria === "wszystkie") {
      this.wszystkieOgloszenia = this.ogloszenia;
    } else {
    this.wszystkieOgloszenia = this.ogloszenia.filter(e => e.category === kategoria);
    }
    this.ogloszeniaChanged.next(this.wszystkieOgloszenia.slice());
  }

  favoriteSort(fav: boolean) {
    if(fav) {
      this.wszystkieOgloszenia = this.ogloszenia.filter(e => e.fav === fav);
    }
    this.ogloszeniaChanged.next(this.wszystkieOgloszenia.slice());
  }

  filter() {
    this.notImportantOgloszenia = this.wszystkieOgloszenia.filter(o => !o.important);
    this.importantOgloszenia = this.wszystkieOgloszenia.filter(o => o.important);
  }

  check(ogloszenie: ogloszenie, i: number) {
    if(ogloszenie.important) {
      this.importantOgloszenia.push(ogloszenie);
      this.notImportantOgloszenia.splice(i, 1);
    }
    else {
      this.notImportantOgloszenia.push(ogloszenie);
      this.importantOgloszenia.splice(i, 1);
    }
  }

  onDelete(ogloszenie: ogloszenie) {

    const result = window.confirm('Czy napewno chcesz usunąć to ogłoszenie?');

    if (result) {
      this.ogloszenia = this.ogloszenia.filter(o => o !== ogloszenie);
      this.wszystkieOgloszenia = this.wszystkieOgloszenia.filter(o => o !== ogloszenie);
      this.tooManyOgloszenia();
      this.ogloszeniaChanged.next(this.wszystkieOgloszenia.slice());
      //this.filter();
    }
  }

  zobaczOgloszenie: ogloszenie = {
    title: '',
    description: '',
    important: false,
    category: ''
  };

  edytujOgloszenie: ogloszenie = {
    title: '',
    description: '',
    important: false,
    category: ''
  };

  index = 0;

  onToSee(ogloszenie: ogloszenie, i: number) {
    this.zobaczOgloszenie = ogloszenie;
    this.index = i;
  }

  onToEdit(ogloszenie: ogloszenie) {
    this.edytujOgloszenie = ogloszenie;
  }

  saveUpdatedOgloszenie(ogloszenie: ogloszenie) {
    //this.edytujOgloszenie = ogloszenie;
    //this.ogloszenia.push(this.edytujOgloszenie);

    const index = this.ogloszenia.findIndex(item => item.title === this.edytujOgloszenie.title);
    const index2 = this.wszystkieOgloszenia.findIndex(item => item.title === this.edytujOgloszenie.title);

  if (index !== -1 && index2 !== -1) {
    this.ogloszenia.splice(index, 1);
    this.wszystkieOgloszenia.splice(index2, 1);
    this.ogloszenia.push(ogloszenie);
  }

  this.ogloszeniaChanged.next(this.ogloszenia.slice());
    }
    

  przepelnienie = new Subject<boolean>();

  tooManyOgloszenia() {
    if(this.ogloszenia.length >= 20) {
      this.przepelnienie.next(true);
    } else {
      this.przepelnienie.next(false);
    }
  }

  photoEmitter = new EventEmitter<string>();

}
