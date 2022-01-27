import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productName : string ='';
  price :any;
  quantity:number=1;
  totalAmount:any;
  resultMsg:string='';



  getTotalAmount(){
    this.totalAmount = this.price * this.quantity;
    if(isNaN(this.totalAmount)){
      this.totalAmount = "NaN";
    }
    this.resultMsg = `Total Amount is ${this.totalAmount}`;
  }

}
