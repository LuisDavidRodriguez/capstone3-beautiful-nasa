import { allReducer } from '../apod';
import { fetchDateApod } from '../apodApi';

const payload = [
  {
    id: 'esnatier',
    title: 'Night Magic',
    date: '2004-10-15',
    url: 'https://apod.nasa.gov/apod/image/0410/magicnight_wagner_c1.jpg',
    mediaType: 'image',
  },
];
describe('testing for slice functions', () => {
  const initialState = {
    filters: {
      show: 'ALL',
      text: '',
      date: '',
      mediaType: '',
    },
    data: [],
    status: 'empty',
  };

  const pendingState = { type: fetchDateApod.pending };
  const fulfilledState = { type: fetchDateApod.fulfilled, payload };

  it('Test for thunk pending state', () => {
    expect(allReducer(initialState, pendingState)).toEqual({
      filters: {
        show: 'ALL',
        text: '',
        date: '',
        mediaType: '',
      },
      data: [],
      status: 'pending',
    });
  });
  it('Test for thunk fulfiled state', () => {
    expect(allReducer(initialState, { ...fulfilledState }).data).toHaveLength(1);
  });
});
