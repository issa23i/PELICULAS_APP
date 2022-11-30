import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() { }


  arrayPeliculas: any[] = Array(0);
  ngOnInit() {
    for (let i = 1; i < 21; i++) {
      this.arrayPeliculas.push(`Pelicula ${i}`);
    }
  }

}
