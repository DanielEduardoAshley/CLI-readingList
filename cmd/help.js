const menus = {
    main: `
      readingList [command] <options>
  
      booklist .............. query book
      favorite .............. favorite a book
      savedList     .............. view books saved to reading list
      version ............ show package version
      help ............... show help menu for a command`,
  
    booklist: `
      readingList booklist <options>
  
      --search, -s .....  search books by book title`,
    favorite:`
      readingList favorite <options>

      --favorite -f .... save to reading list
    `,
    savedList:`
      readingList savedList <options>

      --savedList -s .... view book titles in your favorites list

    `
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }