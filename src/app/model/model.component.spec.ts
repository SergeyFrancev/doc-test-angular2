import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ModelComponent} from './model.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('ModelComponent', () => {
  let component: ModelComponent;
  let fixture: ComponentFixture<ModelComponent>;
  let de: DebugElement;
  let el: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    de = fixture.debugElement;
    // fixture.detectChanges();
  });

  describe('- methods', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('value is 1', () => {
      expect(component.value).toEqual(1);
    });

    it('value cant be less 0', () => {
      component.value = 0;
      component.decrease();
      expect(component.value).toEqual(0);
    });

    it('after call increase value is 2', () => {
      component.increase();
      expect(component.value).toEqual(2);
    });

    it('after call decrease value is 0', () => {
      component.decrease();
      expect(component.value).toEqual(0);
    });
  });

  describe('- element', () => {
    it('check show label', () => {
      let title = de.query(By.css('b'));
      expect(title).toBeTruthy();
    });

    it('check correct value', () => {
      let value = de.query(By.css('.counter-value'));
      expect(value).toBeTruthy();
      expect(value.nativeElement).toBeTruthy();
      expect(value.nativeElement.innerText).toBe('1', 'Content is empty');
    });

    it('update value to 2 after increase', () => {
      component.increase();
      fixture.detectChanges();
      let value = de.query(By.css('.counter-value'));
      expect(value).toBeTruthy();
      expect(value.nativeElement).toBeTruthy();
      expect(value.nativeElement.innerText).toBe('2');
    });
  })
});
