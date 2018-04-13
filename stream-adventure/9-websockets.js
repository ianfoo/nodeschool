// This one is just broken. I tried various things, then ended up giving up,
// and below is the reference solution provided by the stream-adventure workshop.
// It does not work, only ever producing the following output:
//
// $ sa verify 9-websockets.js
//
// TAP version 13
// ################################################
// #                                              #
// # Open http://localhost:8099 to run your code! #
// #                                              #
// ################################################
//
// #########################################
// ###   YOUR SOLUTION IS NOT CORRECT!   ###
// #########################################
// 
// https://github.com/workshopper/stream-adventure/issues/164 describes a somewhat
// similar situation, but I am not seeing any errors, as are mentioned in issue 164.
// There are a few other issues in the Github repository, and a PR that's been open 
// for years (now with merge conflicts). It seems that this workshop, or at least 
// this lesson in this workshop, has known problems, so I'm abandoning this lesson.

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.write('hello\n');
