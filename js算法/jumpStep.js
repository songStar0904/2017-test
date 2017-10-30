/**
 * @Author   songStar
 * @DateTime 2017-10-30
 * @美柚笔试题 台阶问题
 * 给定一个有N个台阶的楼梯，一个人从下到上开始跳台阶，这个人有两种跳的方式：
 * 一次跳一个台阶，一次跳两个台阶；问：从台阶底端跳到台阶顶端，有多少种跳台阶的方式？
 */
function jumpStep(n){
	if (n <= 0){
		return -1;
	}
	if (n == 1) {
		return 1;
	}
	if (n == 2) {
		return 2;
	}
	return jumpStep(n - 1) + jumpStep(n - 2);
}
jumpStep(5);