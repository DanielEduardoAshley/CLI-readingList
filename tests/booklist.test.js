const booklist = require('../cmd/booklist');
const ora = require('ora');



const getBookData = require('../utils/books')


test('expects book data to return an array', async ()=>{
    const b = await booklist('harry potter')

    expect(b).not.toBeNull();
    expect(b).toBeDefined();
    expect(b).not.toBeUndefined();
    expect(b).toBeTruthy();
    
})



jest.mock('ora', () => {
  const start = jest.fn();
  const result = { start };
  const ora = jest.fn(() => result);
  ora.start = start;  // attach the start mock to ora
  return ora;
});


// jest.mock('ora', () => {
//     const stop = jest.fn();
//     const result = { stop };
//     const ora = jest.fn(() => result);
//     ora.stop = stop;  // attach the stop mock to ora
//     return ora;
//   });






it('should call ora start', () => {
    const result = ora();
    expect(result.start).toHaveBeenCalled();  // Success!
  });

//   it('should call ora stop', () => {
//     const result = ora();
//     expect(result.stop).not.toHaveBeenCalled();  // Success!
//   }); 

jest.spyOn(global.console, 'log')


