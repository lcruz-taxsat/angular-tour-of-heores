import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heores';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
