import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelComponent } from './model.component';

describe('ModelComponent', () => {
  let component: ModelComponent;
  let fixture: ComponentFixture<ModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value is 1', () => {
    expect(component.value).toEqual(1);
  });

  it('after call incress value is 2', () => {
    component.incress();
    expect(component.value).toEqual(2);
  });

  it('after call decress value is 0', () => {
    component.decress();
    expect(component.value).toEqual(0);
  });
});
