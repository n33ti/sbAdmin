import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../storage.service'
import {Product} from './Product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products= []
  constructor(private localStorageService: LocalStorageService) {
    this.products =  this.localStorageService.getProducts()
   }
   ngOnChange()
{
  this.products =  this.localStorageService.getProducts()
    console.log(this.localStorageService.getProducts())
}
  ngOnInit(): void {
 
    
   /* var tRow = document.createElement('tr')
    document.getElementById('productTable').appendChild(tRow)
    var td1 = document.createElement('td')
    td1.innerHTML = this.localStorageService.getTitle().toString();
    tRow.appendChild(td1);
    var td2 = document.createElement('td')
    td2.innerHTML = this.localStorageService.getPrice.toString();
    tRow.appendChild(td1);
    var td3 = document.createElement('td')
    td3.innerHTML = 'edit | delete'
    tRow.appendChild(td1); */

  
    

  }

}
