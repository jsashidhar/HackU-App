/*
 This is a minified javascript module because I have not had a chance to refactor and
 clean up the horrible hacks I have done to make this work, and I don't want to expose
 the code and then spend alot of time responding to issues and/or questions.
 
 This code is released AS IS and I will clean it up, document it better and eventually
 re-release it as a module or open source
 
*/
var linkedInModule = require('linkedInMod');

//
// MUST INITIALIZE WITH KEYS
// GET KEYS AT https://developer.linkedin.com/apis
//
linkedInModule.init('WgX1RXpI5KaXptr0', '77kr459ks645pi');
module.exports = linkedInModule;