import { IProfile, publicProfileMock } from './profile';

const profileMock: IProfile = publicProfileMock;

describe('Tests ProfileModel', () => {
  it('should test IProfile with value', () => {
    const profileModel: IProfile = {
      id: profileMock.id,
      name: profileMock.name,
      email: profileMock.email,
      photo: profileMock.photo,
      active: profileMock.active,
    };
    expect(profileModel.id).toEqual(profileMock.id);
    expect(profileModel.name).toEqual(profileMock.name);
    expect(profileModel.email).toEqual(profileMock.email);
    expect(profileModel.photo).toEqual(profileMock.photo);
    expect(profileModel.active).toEqual(profileMock.active);
  });
});
