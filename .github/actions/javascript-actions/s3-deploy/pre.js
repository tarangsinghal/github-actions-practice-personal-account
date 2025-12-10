const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function myPreFunction(){

    core.debug('This is a debug message from PRE script');

// console.log('::debug::This is a debug message from PRE script');

}

myPreFunction();