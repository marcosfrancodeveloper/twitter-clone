export interface IProfile {
  id: number;
  name: string;
  tag: string;
  email: string;
  photo: string;
  active: boolean;
}

export class Profile implements IProfile {
  id: number;
  name: string;
  tag: string;
  email: string;
  photo: string;
  active: boolean;

  constructor(rawData: IProfile) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.tag = rawData.tag;
    this.email = rawData.email;
    this.photo = rawData.photo;
    this.active = rawData.active;
  }
}

export const publicProfileMock: IProfile = {
  id: 1,
  name: 'Miguel Fernando Jorge Aragão',
  tag: '@miguelfernandojorgearagao',
  email: 'miguelfernandojorgearagao@gmail.com',
  photo: '/assets/img/profile.png',
  active: true
};
