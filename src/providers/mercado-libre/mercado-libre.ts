import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MercadoLibreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MercadoLibreProvider {

  apiLink:any = "https://api.mercadolibre.com/sites/MCO/search?q=";
  constructor(public http: Http) {}

  /*Method to search by item on the app*/
  searchItem(item:string)
  {
    return new Promise((resolve, reject)=>{
      var url:string = this.apiLink + item
      this.http.get(url).map(res=>res.json()).subscribe(
        (data) =>{
          resolve(data)
        },
        (error) =>{
          reject("Error:" + error)
        })
    })}

}
