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
    console.log("Sisas papo");
    this._mercado_libre.searchItem(item).then((data)=>{
    this.item_info = data;
    console.log(this.item_info);
  })
  }
}
