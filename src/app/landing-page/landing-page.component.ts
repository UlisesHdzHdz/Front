import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
///Clase prinsipal del componente del Logica de negocio

export class LandingPageComponent implements OnInit {
products = [];

  constructor(private serviceService : ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getProduct("products/").subscribe((data : any []) =>{
      console.log(data);
     this.products = data;

      
    });
 
  }

}
