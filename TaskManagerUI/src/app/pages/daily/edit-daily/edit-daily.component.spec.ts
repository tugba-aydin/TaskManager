/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditDailyComponent } from './edit-daily.component';

describe('EditDailyComponent', () => {
  let component: EditDailyComponent;
  let fixture: ComponentFixture<EditDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
