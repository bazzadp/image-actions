#!/usr/bin/env node

const { GITHUB_TOKEN, GITHUB_EVENT_NAME } = require("./src/constants");

const githubEvent = require("./src/github-event");
const run = require("./src/index.js");

if (!GITHUB_TOKEN) {
  console.log("::error:: You must enable the GITHUB_TOKEN secret");
  process.exit(1);
}

const main = async () => {

  if (!COMPRESS_ONLY) {
    
    // Bail out if the event that executed the action wasn’t a pull_request
    if (GITHUB_EVENT_NAME !== "pull_request") {
      console.log("::error:: This action only runs for pushes to PRs, unless compressOnly is set to true");
      process.exit(78);
    }

    // Bail out if the pull_request event wasn't synchronize or opened
    const event = await githubEvent();
    if (event.action !== "synchronize" && event.action !== "opened") {
      console.log(
        "::error:: Check run has action",
        event.action,
        ". Wants: synchronize or opened"
      );
      process.exit(78);
    }
  }

  await run();
};

main();
