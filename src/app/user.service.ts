import {Injectable} from '@angular/core';
import {AccountService} from "./account.service";

@Injectable()
export class UserService {

  constructor(public account: AccountService) {
    account.isValid = true
  }
}
