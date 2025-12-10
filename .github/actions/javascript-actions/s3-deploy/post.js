const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function myPostFunction(){

    core.debug('This is a debug message from POST script');

// console.log('::debug::This is a debug message from POST script');

}

myPostFunction();