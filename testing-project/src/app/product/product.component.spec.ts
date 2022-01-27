import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Task -1
  //1. Check the default values of quantity --- should be 1
  it('Quantity Default Value of 1', () => {
    let quantity = component.quantity;
    expect(quantity).toBe(1);
  });
  //2. Check the default result message -- should be empty
  it('Result msg should be empty', () => {
    let msg = component.resultMsg;
    expect(msg).toBe('');
  });
  //3. Check the result message by calling "getTotalAmount()"  method

  it('result message by calling "getTotalAmount()',()=>{
    component.price=100;
    component.quantity=5;
    component.getTotalAmount()

    expect(component.resultMsg).toBe(`Total Amount is ${component.totalAmount}`)
  })

  //4.  Check the result message by calling "getTotalAmount()"  method -- generate NaN for wrong values (other than numbers).

  it('check NaN',()=>{
    component.price="ss";
    component.quantity=5;
    component.getTotalAmount()

    expect(component.totalAmount).toBe(`NaN`)
  })
});
