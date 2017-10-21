function fn(n){
	var arr = [];
	n = n.replace('RED', ''); //过滤掉red
	arr = n.split(/[a-z|A-Z]+/g);
	arr.sort(function(a, b){
		return b - a;
	})
	console.log(arr)
	if (arr[0] == ''){
		return -1;
	} else {
		return parseInt(arr[0], 10);
	}
}
fn('D1ER2345AB')