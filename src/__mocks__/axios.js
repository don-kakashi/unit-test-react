const axiosMock = jest.genMockFromModule('axios');

const mockResponse = {
  data: {
    shops: [{
      location: 'test location',
      address: 'test address',
    }]
  }
};

axiosMock.get.mockImplementation(req);

function req() {
  return new Promise(resolve =>
    axiosMock.delayTimer = setTimeout(() => {
        resolve(mockResponse)
      },
      100
    )
  )
}

module.exports = axiosMock;