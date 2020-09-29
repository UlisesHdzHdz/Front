import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
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
  // nombre : tipo = valor
  //  status : boolean = false;
  products = [];
  status = false;
  nameButton: string = 'Mostrar'
  info = "No Hay nada"
 

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
 this.serviceService.getProduct("products/").subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  }

  sendService() {
    /*  this.info= 'si hay datos' */
   

  }
  clearService() {
    this.products = [];
  }
  showHide(){
    this.status =!this.status //toggle
    if(this.status){
      this.nameButton = 'Ocultar';
    }else{
      this.nameButton = 'Mostrar';
    }
  }

}
