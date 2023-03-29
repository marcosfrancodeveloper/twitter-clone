import { IPost, publicPostMock } from './post';

const postMock: IPost = publicPostMock;

describe('Tests PostModel', () => {
  it('should test IPost with value', () => {
    const postModel: IPost = {
      id: postMock.id,
      profileId: postMock.profileId,
      title: postMock.title
    };
    expect(postModel.id).toEqual(postMock.id);
    expect(postModel.profileId).toEqual(postMock.profileId);
    expect(postModel.title).toEqual(postMock.title);
  });
});
