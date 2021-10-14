const core = require('@actions/core');
const github = require('@actions/github');

try {
  // throw new Error('Some errors');

  const name = core.getInput('who-to-greet');

  console.log(`Hello ${name}`);

  const time = new Date().toTimeString();

  core.setOutput('time', time);

  console.log(JSON.stringify(github, null, '\t'));
} catch (e) {
  core.setFailed(e.message);
}
