const mock = require('mock-fs');
// This is a library that promisifies fs, you can use fs as well
const fs = require('fs');
const view = require('../cmd/view');


// beforeEach(async () => {
//   // Creates an in-memory file system 
//   mock({
//     '/test': {
//       'note.md': 'hello world!'
//     }
//   })
// })

// afterEach(async () => {
//   mock.restore()
// })




it('loads a file from disk', async () => {
  
  expect.assertions(1)
  return view('/savedBooks.txt')
  .then(data => expect(data).toBe('hello world!'))
})

// it('loads a file from disk', async () => {
//   expect.assertions(1)
//   return fileHandler.loadFile('/test/note.md')
//   .then(data => expect(data).toBe('hello world!'))
// })


// describe('view prints "No saved books"', () => {
//   const log = jest.spyOn(global.console, 'log')
//   print('No saved books')  
//   expect(log).toHaveBeenCalledWith('No saved books')
// })