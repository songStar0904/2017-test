function Require(methods){
	for (var i = 0, len = methods.length; i < len; i++){
		methods[i] = {
			type: methods[i].split(':')[0],
			url: methods[i].split(':')[1]
		};
		if (methods)
	}
}