import {RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";

export class MockHttpService{
  result: any;
  error: any;
  private _url: string;
  private _options: RequestOptionsArgs;
  private _method: 'get'|'post'|'put'|'delete'|'patch'

  get url() {
    return this._url
  }
  get options() {
    return this._options
  }
  get method() {
    return this._method
  }

  get(url: string, options?: RequestOptionsArgs){
    this._method = 'get';
    this._url = url;
    this._options = options;
    return new Observable((observer) => {
      setTimeout(() => {
        if (this.error) {
          observer.error(this.error)
        } else {
          observer.next(this.result)
        }
        observer.complete()
      }, 1)
    })
  }

  reset() {
    this.result = this.error = this._method = this._url = this._options = undefined;
  }
}
