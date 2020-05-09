//const generateMarkdownReport = require("./github-markdown");
//const processImages = require("./image-processing");
//const createComment = require("./github-pr-comment");
//const createCommit = require("./github-commit");
//const getConfig = require("./config");
//const core = require('@actions/core');

const run = async () => {
  //const config = await getConfig();
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
  const results = true;

  console.log("->> Generating markdown…");
  //const markdown = await generateMarkdownReport(results);
  const markdown = "Test output\nTest Line2\n\nTest line4";
  const escaped_markdown = markdown.replace(/\%/g,'%25').replace(/\n/g,'%0A').replace(/\r/g,'%0D')
  //const markdown = "Hi again Barry"
  console.log("::set-output name=calibre_markdown::" + escaped_markdown)
  //core.setOutput("calibre_markdown", markdown);

  // If compress only mode, then we're done
  if (true) { //config.compressOnly) {
    console.log("->> compressOnly was set. Stopping.");
    return results;
  }

  console.log("->> Committing files…");
  //await createCommit(optimisedImages);

  console.log("->> Leaving comment on PR…");
  //await createComment(markdown);

  return results;
};

//module.exports = run;
(async () => { await run(); })();
