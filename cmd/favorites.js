module.exports=(args)=>{
    const favorite = args.favorites || args.f

    cliSelect({
        values: books[1],
        valueRenderer: (value, selected) => {
            if (selected) {
                return chalk.underline(value);
            }
     
            return value;
        },
    });

}