import { IAuth, IToken } from '../interfaces';
import { GrantTypes } from '../types';

export class Auth implements IAuth {
  username: string;
  password: string;
  grant_type: GrantTypes;

  constructor(rawData: IAuth) {
    this.username = rawData.username;
    this.password = rawData.password;
    this.grant_type = rawData.grant_type;
  }
}

export class Token implements IToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  jti: string;

  constructor(rawData: IToken) {
    this.access_token = rawData.access_token;
    this.token_type = rawData.token_type;
    this.expires_in = rawData.expires_in;
    this.scope = rawData.scope;
    this.jti = rawData.jti;
  }
}

export const publicAuthRequestMock: IAuth = {
  username: 'teste@teste.com',
  password: 'teste@123',
  grant_type: 'password'
};

export const publicAuthResponseMock: IToken = {
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzkwOTkzMzAsInVzZXJfbmFtZSI6Im1hcmNvc2ZyYW5jby5kZXZlbG9wZXJAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9PUEVSQVRPUiIsIlJPTEVfQURNSU4iXSwianRpIjoiZmE5ODVkM2UtZDk0My00NTExLTk4NWYtNDBkY2U5ZjA5ZTdlIiwiY2xpZW50X2lkIjoiUmVjZWJhLUFwcCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.dJ7gE2_n-ExPizOpEKjXyRDhZ84Fh3Uo0nlEaqmyDmw',
  token_type: 'bearer',
  expires_in: 86399,
  scope: 'read write',
  jti: 'fa985d3e-d943-4511-985f-40dce9f09e7e'
};
