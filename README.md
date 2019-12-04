# Reading List CLI   
[![Build Status](https://travis-ci.org/DanielEduardoAshley/CLI-readingList.svg?branch=readinglistbranch)](https://travis-ci.org/DanielEduardoAshley/CLI-readingList)
### Google Books Api Command Line Interface Application

![](https://media.boingboing.net/wp-content/uploads/2017/11/books.jpg)


## Getting Started

Use npm install to download all dependencies after cloning the repo in your terminal.

```bash
git clone https://github.com/DanielEduardoAshley/CLI-readingList.git
```

## Usage
Terminal Commands
```
 main: 
    readingList [command] <options>
  
      booklist .............. query book
      favorite .............. favorite a book
      view    .............. view books saved to reading list
      version ............ show package version
      help ............... show help menu for a command`,
  
    booklist: 
      readingList booklist <options>
  
      --search, -s .....  search books by book title,
```


## Testing
```bash
Run tests: npm test

Travis continous intergration pipeline triggers builds on merge with master as well as continuous coverage reporting through coveralls.io
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
