import { IProfile } from "./profile";

export interface IPost {
  id: number;
  profileId: number;
  title: string;
  date: Date;
  profile?: IProfile;
}

export class Post implements IPost {
  id: number;
  profileId: number;
  title: string;
  date: Date;
  profile?: IProfile;

  constructor(rawData: IPost) {
    this.id = rawData.id;
    this.profileId = rawData.profileId;
    this.title = rawData.title;
    this.date = rawData.date;
    this.profile = rawData.profile;
  }
}

export const publicPostMock: IPost = {
  id: 1,
  profileId: 1,
  title: 'Teste',
  date: new Date('2023-03-20T12:28:31'),
  profile: {
    id: 1,
    name: 'Miguel Fernando Jorge Aragão',
    tag: '@miguelfernandojorgearagao',
    email: 'mmiguelfernandojorgearagao@gmail.com',
    photo: '/assets/img/post.png',
    active: true
  }
};
