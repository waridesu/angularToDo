import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass'],
})
export class CarsComponent implements OnInit {
  name: string;
  speed: number;
  model: string;
  color: Colors;
  options: string[];

  constructor() {}

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.color = {
      car: 'Белый',
      salon: 'Черный',
      wheel: 'Серебристый',
    };
    this.options = ['ABS', 'Автопилот', 'Автопаркинг'];
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }
  delOpt(option) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName: string) {
    if (carName === 'BMW') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.color = {
        car: 'Синий',
        salon: 'Белый',
        wheel: 'Серебристый',
      };
      this.options = ['Система трека', 'Круиз контроль'];
    } else if (carName === 'Audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.color = {
        car: 'Белый',
        salon: 'Черный',
        wheel: 'Серебристый',
      };
      this.options = ['ABS', 'Автопилот', 'Автопаркинг'];
    } else {
      this.name = 'Mersedess';
      this.speed = 180;
      this.model = 'C180';
      this.color = {
        car: 'Красный',
        salon: 'Черный',
        wheel: 'Серебристый',
      };
      this.options = ['Массаж', 'Просмотр фильмов', 'Автопилот', 'Автопаркинг'];
    }
  }
}
interface Colors {
  car: string;
  salon: string;
  wheel: string;
}
