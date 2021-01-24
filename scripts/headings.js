const createHeading = (headings) => {
    // Creates and returns a basic table of contents from heading provided.
    let heading;
    let returnHeading = "";
    // Loop through and format heading urls to remove spaces.
    for (heading in headings) {
        let urlString = headings[heading].split(" ").join('%20');
        returnHeading += `> - [${headings[heading]}](#${urlString})\n`;
    }
    return returnHeading;
}

module.exports = {
    createHeading,
};
