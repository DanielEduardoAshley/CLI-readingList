const version = require('../cmd/version');



it('should call version ', () => {
     jest.spyOn(global.console, 'log');
    expect(version).toHaveBeenCalled();  // Success!
  });