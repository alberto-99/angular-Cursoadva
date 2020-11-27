import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public titulo1:string= "Sales"
  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1: number[][] = [
    [350, 450, 100],
  ];
  public colors1= [
    {backgroundColor: ['#C196F3','#009FEE','#009688']}
  ];


  public titulo2:string= "Purchases"
  public labels2: string[] = ['Download Purchases', 'In-Store Purchases', 'Mail-Order Purchases'];
  public data2: number[][] = [
    [123, 100, 43],
  ];
  public colors2= [
    {backgroundColor: ['#1A237E','#B4F360C','#90A6AE']}
  ];


  public titulo3:string= "Productor Class"
  public labels3: string[] = ['Engines', 'Filters', 'Others'];
  public data3: number[][] = [
    [1224, 5432, 9213],
  ];
  public colors3= [
    {backgroundColor: ['#6857E6','#009FEE','#F02059']}
  ];

  public titulo4:string= "Loses"
  public labels4: string[] = ['Download loses', 'In-Store loses', 'Mail-Order loses'];
  public data4: number[][] = [
    [342, 54, 123],
  ];
  public colors4= [
    {backgroundColor: ['#4CAF50','#FFEB3B','#795548']}
  ];
}
