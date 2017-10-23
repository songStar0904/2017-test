// 题目描述
// 根据包名，在指定空间中创建对象
// 输入描述:
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述:
// {a: {test: 1, b: {c: {d: {}}}}}

function namespace(oNamespace, sPackage) {
    var aPackage = sPackage.split('.'), res = oNamespace;// 浅拷贝
    debugger
    for(var i = 0, len = aPackage.length; i < len; i++){
        if(aPackage[i] in oNamespace){
            if(typeof oNamespace !== 'object'){
                oNamespace[aPackage[i]] = {};
            }
        }else{
            oNamespace[aPackage[i]] = {};
        }
        oNamespace = oNamespace[aPackage[i]];
    }
    return res;
}