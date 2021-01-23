const createHeading = (headings) => {
    let heading;
    let returnHeading = "";
    for (heading in headings) {
        returnHeading += `- [${headings[heading]}](#${headings[heading]})\n`;
    }
    return returnHeading;
}

module.exports = {
    createHeading,
};


// - [Heading](#heading)
// * [Sub-heading](#sub-heading)
// + [Sub-sub-heading](#sub-sub-heading)
// - [Heading](#heading-1)
// * [Sub-heading](#sub-heading-1)
// + [Sub-sub-heading](#sub-sub-heading-1)
// - [Heading](#heading-2)
// * [Sub-heading](#sub-heading-2)
// + [Sub-sub-heading](#sub-sub-heading-2)
//
//
// # Heading levels
//
//
// ## Heading
//
// This is an h1 heading
//
// ### Sub-heading
//
// This is an h2 heading
//
// #### Sub-sub-heading
//
// This is an h3 heading
//
// ## Heading
//
// This is an h1 heading
//
// ### Sub-heading
//
// This is an h2 heading
//
// #### Sub-sub-heading
//
// This is an h3 heading
//
// ## Heading
//
// This is an h1 heading
//
// ### Sub-heading
//
// This is an h2 heading
//
// #### Sub-sub-heading
//
// This is an h3 heading