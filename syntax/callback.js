var a=()=> {
	console.log('A');
}

var slowfunc=(callback)=> {
	callback();
}
slowfunc(a);
