import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   //1. Component load without carashing
   it('should create', () => {
    expect(component).toBeTruthy();
  });

  //2. Testing component properites
  it('should uid contains empty as a default value', () => {
    let str = component.uid;
    expect(str).toBe("");
  });

  //3. Testing component properites
  it('should result contains empty as a default value', () => {
    let str = component.result;
    expect(str).toBe("");
  });

 //4. Testing component methods
 it('should generate correct message for invalid user id or password', () => {
    component.uid =  "hello";
    component.pwd =  "hello123";
    component.loginButton_click();
    let str  = component.result;
    expect(str).toBe("Invalid user id or password");
});


//5. Testing component methods
 it('should generate welcome message for valid user id and password', () => {
  component.uid =  "admin";
  component.pwd =  "admin123";
  component.loginButton_click();
  let str  = component.result;
  expect(str).toBe("Welcome to Admin");
});

});
