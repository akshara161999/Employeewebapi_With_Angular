import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDepComponent } from './addedit-dep.component';

describe('AddEditDepComponent', () => {
  let component: AddEditDepComponent;
  let fixture: ComponentFixture<AddEditDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});