const core = require('@actions/core');
const github = require('@actions/github');

try {
  // throw new Error('Some errors');

  core.debug('Debug message');
  core.warning('Warning message');
  core.error('Error message');

  const name = core.getInput('who-to-greet');

  core.setSecret(name);

  console.log(`Hello ${name}`);

  const time = new Date().toTimeString();

  core.setOutput('time', time);

  core.startGroup('github object log');

  console.log(JSON.stringify(github, null, '\t'));

  core.endGroup();

  core.exportVariable('HELLO', 'yay! hello');
} catch (e) {
  core.setFailed(e.message);
}
