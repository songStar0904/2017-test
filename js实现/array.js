/**
 * @Author   songStar
 * @DateTime 2017-10-30
 * 美柚编程题，大概是这样，具体也忘记了
 */
function ArrayList(arr){
	this.arr = arr;
}
ArrayList.prototype = {
	add: function(str){
		this.arr.push(str);
		return this.arr;
	},
	remove: function(index){
		return this.arr.splice(index, 1);
	},
	set: function(index, str){
		return this.arr.splice(index, 0, str);
	},
	get: function(index){
		return this.arr.slice(index, 1);
	}
}
var arr = new ArrayList([1,2,3]);