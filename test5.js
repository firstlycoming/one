'use strict';
 var fs=require('fs');
 
 var data='我来了Node世界。';
 
 fs.writeFileSync('output.txt',data);