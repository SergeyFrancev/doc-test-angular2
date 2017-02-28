/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {UserBannerComponent} from './user-banner.component';
import {Router} from "@angular/router";
import {MockRouter} from "../test/helpers/router.mock";
import {User} from "../user";

function createRouterMock() {
  let rout = new MockRouter();
  return rout
}

describe('UserBannerComponent', () => {
  let component: UserBannerComponent;
  // let router: MockRouter;
  let fixture: ComponentFixture<UserBannerComponent>;

  beforeEach(async(() => {
    let router = createRouterMock();
    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: router},
      ],
      declarations: [
        UserBannerComponent,
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserBannerComponent);
        component = fixture.componentInstance;
        component.user = new User(123);
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to uesr', () => {
    let router = fixture.debugElement.injector.get(Router);
    const spy = spyOn(router, 'navigateByUrl');
    component.navigateToUser();
    // args passed to router.navigateByUrl()
    const navArgs = spy.calls.first().args[0];
    // expecting to navigate to id of the component's first hero
    expect(navArgs).toBe('test_url/' + component.user.id, 'should nav to User');
  })
});
