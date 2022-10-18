import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products:Product[]=[];

  constructor() {
    this.load();
   }

   public addProduct(name:string,quantity:number){
    this._products.push(new Product(name, quantity));
    this.save();
   }

   public deleteProduct(n:number){
    this._products.splice(n,1);
    this.save();
   }

   public get products(){
    return this._products;
   }

   public save(){
    localStorage.setItem("products", JSON.stringify(this._products));
   }

   public load(){
    const data=localStorage.getItem("products");
    if (data!=null){
      this._products=JSON.parse(data);
    }
   }

}
