import {TestBed, inject} from '@angular/core/testing';
import {UserService} from './user.service';
import {AccountService} from "./account.service";

class AccountMock extends AccountService{
  constructor() {
    super();
    this.name = 'mock'
  }
}
describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {provide: AccountService, useClass: AccountMock},
      ],
    });
  });

  it('create instance', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('include account mock', inject([UserService], (service: UserService) => {
    expect(service.account.name).toBe('mock');
  }));
});
