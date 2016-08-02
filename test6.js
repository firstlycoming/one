'use strict';

var fs= require('fs');

fs.stat('sample.txt',function(err,stat){
	if(err)
	{console.log(err);}
	else
	{console.log('isFile:'+stat.isFile());
		if(stat.isFile())
		{
			console.log('size:'+stat.size);
			console.log('birthtime:'+stat.birthtime);
		}
	}
}
	
);