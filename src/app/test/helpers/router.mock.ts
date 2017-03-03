export class MockRouter {
  private _url: string;

  get url() {
    return this._url
  }

  navigateByUrl(url: string) {
    this._url = url;
    return Promise.resolve(true)
  }

  navigate(command){
  }
}
