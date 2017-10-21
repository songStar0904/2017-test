//用原生JS实现jQuery的ready方法
// window.onload()方法是必须等到页面内包含图片的全部元素载入完成后才干运行。
// $(document).ready()是DOM结构绘制完成后就运行，不必等到载入完成。
function ready(fn){
	if (document.addEventListener) {
		// 标准浏览器
		document.addEventListener('DOMContentLoaded', function(){
			// 注销时间，避免重复触发
			document.removeEventListener('DOMContentLoaded', arguments.callee, false);
			fn();
		}, false);
	} else if (document.attachEvent) {
		// IE浏览器
		document.attachEvent('onreadystatechange', function(){
			if (document.readyState === 'complate') {
				document.detachEvent('onreadystatechange', arguments.callee, false);
				fn();
			}
		});
	}
}