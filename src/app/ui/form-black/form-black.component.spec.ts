import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlackComponent } from './form-black.component';

describe('FormBlackComponent', () => {
  let component: FormBlackComponent;
  let fixture: ComponentFixture<FormBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
