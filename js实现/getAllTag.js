// 获得页面dom元素的所有标签
const getAllTag = function () {
	let result = [],
	    tag = document.getElementsByTagName('*');
	Array.from(tag).forEach(item => {
		if (result.indexOf(item.tagName) === -1) {
			result.push(item.tagName);
		}
	})
	return result;
}
export getAllTag;
