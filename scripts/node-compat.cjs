const os = require('node:os');

process.env.NODE_OPTIONS = '--require=./scripts/node-compat.cjs';

const userInfo = os.userInfo.bind(os);

os.userInfo = (...args) => {
  try {
    return userInfo(...args);
  } catch (error) {
    if (error?.code !== 'ERR_SYSTEM_ERROR') throw error;

    return {
      username: process.env.USERNAME || process.env.USER || 'user',
      uid: -1,
      gid: -1,
      shell: null,
      homedir: process.env.USERPROFILE || process.env.HOME || null,
    };
  }
};
