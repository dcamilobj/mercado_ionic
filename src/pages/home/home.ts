import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MercadoLibreProvider } from '../../providers/mercado-libre/mercado-libre'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  item_info: any = {};

  constructor(public _mercado_libre: MercadoLibreProvider) {
  }
  search(item)
  {
    this._mercado_libre.searchItem(item).then((data)=>{
    this.item_info = data;
  }).catch((error)=>{
    console.log(error)
  })
  }
}
