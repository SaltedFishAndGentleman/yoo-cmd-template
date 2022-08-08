const { spawn } = require('child_process');
const utils = require('../utils');
const { InvalidArgumentError } = require('commander')

const { cmd } = utils;

const repoActions = ['add', 'rm', 'ls']

cmd
  .command('repo')
  .argument('actionType', repoActions.join(' / '), (actionType) => {
    if (!repoActions.includes(actionType)) {

      return new InvalidArgumentError('actionType must be one of  add / rm / ls')
    }

    return actionType
  })
  .argument('repositoryLink', 'scripts repository link',)
  .action((...[actionType, repositoryLink]) => {
    switch (actionType) {
      case 'add': {

      }
      case 'rm': {

      }
      case 'ls': {

      }

      default: {
        break;
      }
    }

    const npmInitCmdStr = `init ${cmdName}`;

    spawn('npm', npmInitCmdStr, { encoding: 'utf-8' });
    // 执行 ‘npm install ’
  });
