import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AccountService {
  isValid: boolean = false;
  account: any;
  name: string = 'pusto';

  constructor(private http: Http) {
  }

  loadAccount(id: string) {
    return this.http.get(`get_account/${id}`)
      .toPromise()
      .then((account) => this.account = account)
  }
}
