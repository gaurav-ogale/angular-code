import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DepartmentComponent } from './department.component';

describe('DepartmentComponent', () => {
  let component: DepartmentComponent;
  let fixture: ComponentFixture<DepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check Departments Array default count',()=>{

    let departments = component.departments;
    expect(departments.length).toBe(3);
  });

  it('check add department function',()=>{
    component.deptName="test";
    component.deptNo=4;
    component.location="Pune";
    component.addDepartment();
    expect(component.resultMsg).toBe("Department Added Successfully - test")
  });

  it('check Html departments Table Default rows',()=>{
    const rows  =  fixture.nativeElement.querySelectorAll("tr");
    expect(rows.length).toBe(4);
  });

  it('check input value for all form fields',()=>{
    let deptname = fixture.nativeElement.querySelectorAll("input");
    deptname[0].value = "Test";
    deptname[0].dispatchEvent(new Event("input"));

    deptname[1].value = 4;
    deptname[1].dispatchEvent(new Event("input"));

    deptname[2].value = "Mumbai";
    deptname[2].dispatchEvent(new Event("input"));
    expect([component.deptName,component.location,component.deptNo]).toEqual(["Test","Mumbai",4])
  });

  it('check if Department Array is updated',()=>{
    let deptname = fixture.nativeElement.querySelectorAll("input");
    deptname[0].value = "Test";
    deptname[0].dispatchEvent(new Event("input"));

    deptname[1].value = 4;
    deptname[1].dispatchEvent(new Event("input"));

    deptname[2].value = "Mumbai";
    deptname[2].dispatchEvent(new Event("input"));

    deptname[3].dispatchEvent(new Event("click"));
    fixture.detectChanges();

    expect([component.deptName,component.location,component.deptNo]).toEqual(["Test","Mumbai",4]);
    expect(component.departments.length).toEqual(4);

  })

});
