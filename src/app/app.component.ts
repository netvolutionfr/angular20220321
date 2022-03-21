import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular20220321';
  compteur = 0;

  incrementCompteur() {
    this.compteur++;
  }
}
