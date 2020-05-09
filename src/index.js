//const generateMarkdownReport = require("./github-markdown");
//const processImages = require("./image-processing");
//const createComment = require("./github-pr-comment");
//const createCommit = require("./github-commit");

//const run = async () => {
  console.log("->> Locating images…");

  /*const results = await processImages();

  const optimisedImages = results.images.filter(
    img => img.compressionWasSignificant
  );

  // If nothing was optimised, bail out.
  if (!optimisedImages.length) {
    console.log("::warning:: Nothing left to optimise. Stopping…");
    return;
  }*/

  console.log("->> Generating markdown…");
  //const markdown = await generateMarkdownReport(results);
  markdown = "Test output\nTest Line2\n\nTest line4"
  console.log("::set-output name=calibre_markdown::" + markdown)

  // If compress only mode, then we're done
  if (compressOnly) {
    console.log("->> compressOnly was set. Stopping.");
    return results;
  }

  console.log("->> Committing files…");
  //await createCommit(optimisedImages);

  console.log("->> Leaving comment on PR…");
  //await createComment(markdown);

  return results;
//};

//module.exports = run;
