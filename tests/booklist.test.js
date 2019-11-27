const booklist = require('../cmd/booklist');

test('expects book data to return an array', async ()=>{
    const b = await booklist('harry potter')

    expect(b).not.toBeNull();
    expect(b).toBeDefined();
    expect(b).not.toBeUndefined();
    expect(b).toBeTruthy();
    
})