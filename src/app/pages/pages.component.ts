import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//llamar la funcion global de assets/js/custom.js
//que controla el tema al cargar la pagina principal
declare function customInitFunctions():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {

      //se llama la funcion del js de assets
    customInitFunctions();

  //  href="./assets/css/colors/default-dark.css"

  }

}
