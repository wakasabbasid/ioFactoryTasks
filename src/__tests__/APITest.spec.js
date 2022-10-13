beforeAll(() => {
  require('whatwg-fetch');
});

describe('demo test', () => {
  test('check', () => {
    const expected = {
      value: "expected data"
    };

    // Data from our api to be tested
    const match = {
      value: "expected data"
    };

    expect(match).toMatchObject(expected);
  });
});
