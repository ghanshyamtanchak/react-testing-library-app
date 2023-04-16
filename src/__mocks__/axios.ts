const mockResponse = {
  data: {
    results: [
      {
        name: { first: 'Banti', last: 'Patel' },
        picture: {
          large: 'https://avatars.githubusercontent.com/u/86671763?v=4',
        },
        login: { username: 'banti377' },
      },
    ],
  },
};

const axiosMock = { get: jest.fn().mockResolvedValue(mockResponse) };

export default axiosMock;
