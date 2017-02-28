import {TestBed, inject, async} from '@angular/core/testing';

import {AccountService} from './account.service';
import {Http} from "@angular/http";
import {MockHttpService} from "./test/helpers/http.mock";

describe('AccountService', () => {
  let http, service: AccountService;

  beforeEach(async(() => {
    http = createHttpMock();
    TestBed.configureTestingModule({
      providers: [
        AccountService,
        {provide: Http, useValue: http},
      ]
    });

    inject([AccountService], (account: AccountService) => {
      service = account
    })()
  }));

  afterEach(() => {
    if (http) {
      http.reset()
    }
  });

  it('create instance', () => {
    expect(service).toBeTruthy()
  });

  it('load account', async(() => {
    service.loadAccount('123')
      .then((data) => expect(http.url).toBe(`get_account/123`))
  }));

  it('update account value, after load account', async(() => {
    let account = {name: 'test'};
    http.result = account;
    service.loadAccount('123')
      .then((data) => expect(service.account).toBe(account))
  }));

  it('not update account value, if load account with error', async(() => {
    let account = {name: 'test'};
    http.result = account;
    // http.error = new Error('404');
    service.loadAccount('123')
      .then((data) => expect(service.account).toBe(account))
  }));

  it('not update account value, if load account with error', (done) => {
    let account = {name: 'test'};
    http.result = account;
    http.error = new Error('404');
    service.loadAccount('123')
      .then((data) => {
        done.fail('Should be error')
      })
      .catch((err) => {
        expect(err.message).toBe('404');
        done()
      })
  })
});

function createHttpMock() {
  return new MockHttpService();
}
