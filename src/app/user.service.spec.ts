import {TestBed, inject, async} from '@angular/core/testing';
import {UserService} from './user.service';
import {AccountService} from "./account.service";
import {Http} from "@angular/http";
import {MockHttpService} from "./test/helpers/http.mock";

class AccountMock extends AccountService {
  constructor(http) {
    super(http);
    this.name = 'mock'
  }
}

function createAccountMock() {
  let accountMock = new AccountMock(new MockHttpService());
  accountMock.name = 'factory';
  return accountMock
}

describe('UserService', () => {
  let accountMock;

  beforeEach(async(() => {
    accountMock = createAccountMock();
    TestBed.configureTestingModule({
      providers: [
        UserService,
        // {provide: AccountService, useClass: AccountMock},
        {provide: AccountService, useValue: accountMock},
      ],
    });
  }));

  it('create instance', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('include account mock', inject([UserService], (service: UserService) => {
    expect(accountMock.name).toBe('factory');
  }));
});
