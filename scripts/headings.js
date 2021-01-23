const createHeading = (headings) => {
    // Creates and returns a basic table of contents from heading provided.
    let heading;
    let returnHeading = "";
    // Loop through and format headings.
    for (heading in headings) {
        heading = heading.split(' ').join('%20;');
        returnHeading += `> - [${headings[heading]}](#${headings[heading]})\n`;
    }
    return returnHeading;
}

module.exports = {
    createHeading,
};
