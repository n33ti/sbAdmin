
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {Product} from './products/Product'

var STORAGE_KEY = 'local_todolist';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  anotherTodolist = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  public storeOnLocalStorage(taskTitle: string, p: number): void {
       
       // get array of tasks from local storage
       const currentTodoList = this.storage.get(STORAGE_KEY) || [];
       // push new task to array
       currentTodoList.push({
          id: this.anotherTodolist.length,
           title: taskTitle,
           price:p 
       });
       // insert updated array to local storage
       this.storage.set(STORAGE_KEY, currentTodoList);
       this.anotherTodolist = this.storage.get(STORAGE_KEY)
       console.log(this.anotherTodolist || 'LocaL storage is empty');
    // this.storage.remove(STORAGE_KEY);

      
  }
  public getTitle(): String {
    return this.anotherTodolist[0].title.toString()

  }
  public getPrice(): number {
    return this.anotherTodolist[0].price
  }

  public getProducts(): any[] {
    var products =[]
    for(let i = 0; i<this.anotherTodolist.length; i++)
    {
      var product = new Product()
      product.id = i
      product.title = this.anotherTodolist[i].title
      product.price = this.anotherTodolist[i].price
      products.push(product)
    }
    return products

  }

}
