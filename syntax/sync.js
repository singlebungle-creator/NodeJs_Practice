var fs=require('fs');


//readFileSYnc
//console.log('A');
//var result = fs.readFileSync('sample.txt', 'utf-8');
//console.log(result);
//console.log('C');

//readFile
console.log('A');
fs.readFile('sample.txt','utf-8', (err, result)=> {
	console.log(result);
});
console.log('C');
