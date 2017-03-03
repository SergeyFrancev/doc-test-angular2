import {User} from "./user.model";

describe('UserModel', () => {
  it('create user model', () => {
    let user = new User();
    expect(user).toBeTruthy();
  });

  it('Empty id after create without params', () => {
    let user = new User();
    expect(user.id).toBeNull()
  });

  it('Bind user id', () => {
    let user = new User(123);
    expect(user.id).toBe(123);
  });
});
