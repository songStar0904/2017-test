// 小红书算法题2
// 给定一个只包含0或1的数组，找出其中包含相同0和1的个数的最长子序列，输出子序列的长度，要求在O（n）的时间负载都内完成
// 如[0,1,1,0]为符合条件的最长子序列，包含两个1和两个0，个数相同
function fn(arr){
	arr =  arr.map(function(item){
		if(item === 0){
			return -1;
		}else{
			return item;
		}
	})
}
fn([1,0,0,1])