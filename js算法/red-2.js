// 小红书算法第二题
// 题意： 给你一个数组，里面有N个整数，找出长度为K（0<K<N）且平均值最大的子数组，并返回这个最大值出来
// 输入：6,[1,12,-5,-6,50,3],4
// 输出：12.75

function fn(n, arr, k){
	function average(arr){
		var sum = 0;
		arr.forEach(function(item, i){
			sum += item;
		})
		return sum / arr.length;
	}
	var len = n - k + 1, i = 0, result = 0, temp; // 可以取到的子数组长度
	for (; i < len; i++) {
		temp = average(arr.slice(i, i + k));
		result = result < temp ? temp : result; 
	}
	return result;
}
fn(6,[1,12,-5,-6,50,3],4);