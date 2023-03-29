export interface IProfile {
  id: number;
  name: string;
  email: string;
  photo: string;
  active: boolean;
}

export class Profile implements IProfile {
  id: number;
  name: string;
  email: string;
  photo: string;
  active: boolean;

  constructor(rawData: IProfile) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.email = rawData.email;
    this.photo = rawData.photo;
    this.active = rawData.active;
  }
}

export const publicProfileMock: IProfile = {
  id: 1,
  name: 'Miguel Fernando Jorge Aragão',
  email: 'mmiguelfernandojorgearagao@gmail.com',
  photo: '/assets/img/profile.png',
  active: true
};
