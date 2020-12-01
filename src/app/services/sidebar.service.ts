import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=
    [
      {
        titulo:'Principal',
        icon:'mdi mdi-gauge',
        submenu: [
          {titulo:'main', url: '/'},
          {titulo:'ProgressBar', url: 'progress'},
          {titulo:'Graficas', url: 'grafica1'},
          {titulo:'Promesas', url: 'promesas'},
          {titulo:'rxjs', url: 'rxjs'},
      ]
      }
    ]
  constructor() { }
}
